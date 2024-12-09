#[derive(serde::Serialize)]
enum FileKind {
    File,
    Directory,
}

#[derive(serde::Serialize)]
struct DirectoryItem {
    name: String,
    size: u64,
    mime: Option<String>,
    kind: FileKind,
}

#[tauri::command]
fn list_directory(path: String) -> Result<Vec<DirectoryItem>, String> {
    let path = std::path::Path::new(&path);
    let entries = match std::fs::read_dir(path) {
        Ok(entries) => entries,
        Err(e) => return Err(e.to_string()),
    };

    let mut result = Vec::new();
    for entry in entries {
        let entry = match entry {
            Ok(entry) => entry,
            Err(e) => return Err(e.to_string()),
        };

        let kind = match entry.file_type() {
            Ok(file_type) => {
                if file_type.is_dir() {
                    FileKind::Directory
                } else {
                    FileKind::File
                }
            }
            Err(e) => return Err(e.to_string()),
        };

        let name = match entry.file_name().into_string() {
            Ok(name) => name,
            Err(_) => continue,
        };

        let size = match entry.metadata() {
            Ok(metadata) => metadata.len(),
            Err(_) => 0,
        };

        let mime = match mime_guess::from_path(entry.path()).first() {
            Some(mime) => Some(mime.to_string()),
            None => None,
        };

        result.push(DirectoryItem {
            name,
            size,
            mime,
            kind,
        });
    }

    Ok(result)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![list_directory])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

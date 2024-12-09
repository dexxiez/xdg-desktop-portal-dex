import { Icon } from "../../../utils/services/mime-icon.types";

interface BaseKind {
  name: string;
  size: number;
}

interface FileKind extends BaseKind {
  kind: "File";
  mime: string;
}

interface DirectoryKind extends BaseKind {
  kind: "Directory";
  mime: null;
}

export type DirectoryItem = FileKind | DirectoryKind;
export type DirectoryItemWithIcon = DirectoryItem & { icon: Icon };

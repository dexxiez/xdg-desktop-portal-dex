```
src/
├── app/
│   ├── core/                 # Singleton services, guards, interceptors
│   ├── shared/              # Reusable components, pipes, directives
│   ├── features/            # Feature modules/components (domain-driven)
│   ├── layouts/             # Layout components
│   └── utils/               # Shared utilities and helpers

features/
├── file-browser/        # Core file browsing functionality
│   ├── components/
│   │   ├── file-list/          # List/grid view of files
│   │   ├── file-preview/       # Preview panel for selected files
│   │   └── breadcrumb-nav/     # Path navigation
│   ├── models/
│   │   ├── file.interface.ts   # File/directory types
│   │   └── filter.types.ts     # File filter configurations
│   └── services/
│       └── file-system.service.ts  # Tauri bridge for fs ops
├── location-management/  # Quick access & bookmarks
│   ├── components/
│   │   ├── quick-access/       # Home, Downloads, etc.
│   │   └── bookmarks/          # User bookmarks
│   └── models/
│       └── location.types.ts
├── filter-controls/     # File type filtering
│   ├── components/
│   │   ├── filter-bar/         # Active filters display
│   │   └── filter-dialog/      # Filter configuration
│   └── models/
│       └── filter-config.types.ts
└── portal-interface/    # XDG Portal communication
    ├── services/
    │   └── portal.service.ts   # Handles portal protocol
    └── models/
        └── portal-request.types.ts

shared/
├── components/          # Reusable UI components
├── directives/         
├── pipes/
└── models/             # Shared interfaces/types
```

cmd_Release/miAddon.node := ln -f "Release/obj.target/miAddon.node" "Release/miAddon.node" 2>/dev/null || (rm -rf "Release/miAddon.node" && cp -af "Release/obj.target/miAddon.node" "Release/miAddon.node")
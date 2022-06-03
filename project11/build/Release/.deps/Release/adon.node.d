cmd_Release/adon.node := ln -f "Release/obj.target/adon.node" "Release/adon.node" 2>/dev/null || (rm -rf "Release/adon.node" && cp -af "Release/obj.target/adon.node" "Release/adon.node")

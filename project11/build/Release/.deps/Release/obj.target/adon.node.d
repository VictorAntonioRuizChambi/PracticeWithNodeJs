cmd_Release/obj.target/adon.node := g++ -o Release/obj.target/adon.node -shared -pthread -rdynamic -m64  -Wl,-soname=adon.node -Wl,--start-group Release/obj.target/adon/hola.o -Wl,--end-group 

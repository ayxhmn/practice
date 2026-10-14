long write(int fd, const void *buf, unsigned long count);

int main() {
    char text[15] = "Hello, World!\n";
    
    write(1, text, 14);
    
    return 0;
}
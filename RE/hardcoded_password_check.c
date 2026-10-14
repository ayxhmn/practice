#include<stdio.h>
#include<string.h>

const char *PASSWORD = "EngineeringREVERSE";

int main() {
    char user_input[20];
    printf("WELCOME!\n");
    printf("TO ENTER YOU NEED THE PASSWORD!\n");
    printf("PASSWORD: ");
    
    if (fgets(user_input, sizeof(user_input), stdin) != NULL) {
        user_input[strcspn(user_input, "\n")] = '\0';
        
        if (strcmp(user_input, PASSWORD) == 0) {
            printf("\n[+] Success: Access Granted!\n");
        }
        else {
            printf("\n[-] Error: Wrong password. Access Denied!\n");
        }
    }
    
    printf("\nPress Enter to exit...");
    getchar();
        
    return 0;
}
/*

Further improvements to be made:
1. Be able to include flags such as -O2, -g, etc.
2. Make it globally accessible so it can be used from any folder in the computer.
3. etc.

*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define INVALID_CHAR " ;&|><"

int compile(char *source, char *output) {
	char buffer[512];

	if (strpbrk(source, INVALID_CHAR) != NULL || strpbrk(output, INVALID_CHAR) != NULL) {
		puts("Compilation using GCC failed.\nInvalid character used.");
		return -1;
	}

	snprintf(buffer, sizeof(buffer), "gcc %s.c -o builds\\%s.exe", source, output);

	if (system(buffer) != 0) {
		puts("\nCompilation using GCC failed for some reason... :(\n");
		return -1;
	}
	puts("Compiled using GCC successful! :)\n");

	return 0;
}

int execute(char *exec) {
	char buffer[384];

	if (strpbrk(exec, INVALID_CHAR) != NULL) {
		puts("Execution failed.\nInvalid character found in executable.");
		return -1;
	}

	snprintf(buffer, sizeof(buffer), "builds\\%s.exe", exec);

	if (system(buffer) != 0) {
		puts("Execution failed for some reason... :(");
		return -1;
	}

	return 0;
}

int run(char *source, char *output) {
	if (compile(source, output) != 0) {
		return -1;
	}

	execute(output);
	
	return 0;
}

int main(int argc, char *argv[]) {

	if (argc < 2 || argc > 3) {
		puts("Usage: run_code <source_name>(required) <output_name>(optional)");
		return -1;
	}

	if (argc == 2) {
		return run(argv[1], argv[1]);
	}

	return run(argv[1], argv[2]);
}

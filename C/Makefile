# Compilers
CLANG = clang
GCC = gcc
BUILD_DIR = builds

# Base standard + safety warnings + math library
CFLAGS = -std=c23 -Wall -Wextra -Wpedantic -Wshadow -Wconversion -lm

# High-performance optimizations for Zen 3 and mold
OPT_FLAGS = -O3 -march=znver3 -fuse-ld=mold

# Runtime memory and undefined-behavior sanitizer flags
SANITIZE_FLAGS = -O0 -g3 -fsanitize=address,undefined -fno-omit-frame-pointer

# Handles tab-completion stripping (.c) and sets output binary name cleanly
SRC_BASE = $(basename $(SOURCE))
OUT = $(if $(OUTPUT),$(OUTPUT),$(notdir $(SRC_BASE)))

.PHONY: all clean clang gcc clang_optimized gcc_optimized sanitize asm

# Standard build with Clang + safety flags (fast compilation)
clang:
	@mkdir -p $(BUILD_DIR)
	@if [ -z "$(SOURCE)" ]; then echo "Usage: make clang SOURCE=file [OUTPUT=outname]"; exit 1; fi
	@$(CLANG) $(CFLAGS) $(SRC_BASE).c -o $(BUILD_DIR)/$(OUT)
	@echo "Compilation successful! Executing... :)"
	@./$(BUILD_DIR)/$(OUT)

# Standard build with GCC + safety flags (fast compilation)
gcc:
	@mkdir -p $(BUILD_DIR)
	@if [ -z "$(SOURCE)" ]; then echo "Usage: make gcc SOURCE=file [OUTPUT=outname]"; exit 1; fi
	@$(GCC) $(CFLAGS) $(SRC_BASE).c -o $(BUILD_DIR)/$(OUT)
	@echo "Compilation successful! Executing... :)"
	@./$(BUILD_DIR)/$(OUT)

# Optimized build with Clang (-O3, znver3 AVX2 instructions, mold linker)
clang_optimized:
	@mkdir -p $(BUILD_DIR)
	@if [ -z "$(SOURCE)" ]; then echo "Usage: make clang_optimized SOURCE=file [OUTPUT=outname]"; exit 1; fi
	@$(CLANG) $(CFLAGS) $(OPT_FLAGS) $(SRC_BASE).c -o $(BUILD_DIR)/$(OUT)
	@echo "Compiled with Clang (Optimized: -O3, znver3, mold). Executing..."
	@./$(BUILD_DIR)/$(OUT)

# Optimized build with GCC (-O3, znver3 AVX2 instructions, mold linker)
gcc_optimized:
	@mkdir -p $(BUILD_DIR)
	@if [ -z "$(SOURCE)" ]; then echo "Usage: make gcc_optimized SOURCE=file [OUTPUT=outname]"; exit 1; fi
	@$(GCC) $(CFLAGS) $(OPT_FLAGS) $(SRC_BASE).c -o $(BUILD_DIR)/$(OUT)
	@echo "Compiled with GCC (Optimized: -O3, znver3, mold). Executing..."
	@./$(BUILD_DIR)/$(OUT)

# Memory bounds check, use-after-free, and undefined behavior trap
sanitize:
	@mkdir -p $(BUILD_DIR)
	@if [ -z "$(SOURCE)" ]; then echo "Usage: make sanitize SOURCE=file [OUTPUT=outname]"; exit 1; fi
	@$(CLANG) $(CFLAGS) $(SANITIZE_FLAGS) $(SRC_BASE).c -o $(BUILD_DIR)/$(OUT)
	@echo "Running with AddressSanitizer & UndefinedBehaviorSanitizer..."
	@./$(BUILD_DIR)/$(OUT)

# Emits Intel-syntax annotated assembly for low-level inspection
asm:
	@mkdir -p $(BUILD_DIR)
	@if [ -z "$(SOURCE)" ]; then echo "Usage: make asm SOURCE=file"; exit 1; fi
	@$(CLANG) $(CFLAGS) $(OPT_FLAGS) -S -masm=intel -fverbose-asm $(SRC_BASE).c -o $(BUILD_DIR)/$(OUT).s
	@echo "Assembly generated at: $(BUILD_DIR)/$(OUT).s"

clean:
	@rm -rf $(BUILD_DIR)
	@echo "Deleted builds directory!"

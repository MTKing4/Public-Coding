import os

# Files to ignore (add more if needed)
IGNORE_DIRS = {'.git', 'node_modules', '__pycache__', 'venv', 'bin', 'obj'}
IGNORE_EXTS = {'.exe', '.dll', '.so', '.o', '.png', '.jpg', '.pdf'}


def generate_summary():
    summary = []
    summary.append("### REPOSITORY STRUCTURE ###")

    # 1. Walk the tree for structure
    for root, dirs, files in os.walk("."):
        # Filter directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        level = root.count(os.sep)
        indent = " " * 4 * level
        summary.append(f"{indent}- {os.path.basename(root)}/")
        for f in files:
            if not any(f.endswith(ext) for ext in IGNORE_EXTS):
                summary.append(f"{indent}    - {f}")

    summary.append("\n### FILE CONTENTS ###")

    # 2. Read important files
    for root, dirs, files in os.walk("."):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        for file in files:
            # Only read code files (add extensions as needed)
            if file.endswith(('.py', '.cpp', '.h', '.js', '.ts', '.md', '.java')):
                path = os.path.join(root, file)
                summary.append(f"\n--- START OF {path} ---")
                try:
                    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                        summary.append(f.read())
                except Exception as e:
                    summary.append(f"[Error reading file: {e}]")
                summary.append(f"--- END OF {path} ---")

    # Output results
    final_output = "\n".join(summary)
    print(final_output)

    # Optional: Save to file
    with open("repo_summary.txt", "w", encoding="utf-8") as f:
        f.write(final_output)


if __name__ == "__main__":
    generate_summary()
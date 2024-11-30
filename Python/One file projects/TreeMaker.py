import os

def create_folders_and_files(base_path, folder_structure):
    # Ensure the base path exists
    if not os.path.exists(base_path):
        os.makedirs(base_path)

    # Iterate over the structure recursively
    for folder_name, content in folder_structure.items():
        folder_path = os.path.join(base_path, folder_name)

        # If the current item is a folder, create it
        if isinstance(content, dict):  # This folder has subfolders
            if not os.path.exists(folder_path):
                os.makedirs(folder_path)
                print(f"Created folder: {folder_path}")

            # Recursively create subfolders and files
            create_folders_and_files(folder_path, content)
        
        elif isinstance(content, list):  # This folder has files
            # Create the folder if it doesn't exist
            if not os.path.exists(folder_path):
                os.makedirs(folder_path)
                print(f"Created folder: {folder_path}")

            # Create files inside the folder
            for file_name in content:
                file_path = os.path.join(folder_path, file_name)
                if not os.path.exists(file_path):
                    with open(file_path, 'w') as file:
                        file.write("")  # Empty content for now
                    print(f"Created file: {file_path}")
                else:
                    print(f"File '{file_path}' already exists, skipping creation.")

def main():
    # Predefined values (for running in output mode)
    base_path = r"C:\Users\khlif\Desktop"  # Change this to your base path

    # New structure using a dictionary for better handling
    folder_structure = {
        "Projects": {
            "React": [],
            "Nextjs": [],
            "Nodejs": ["README.md"],
            "Php": ["README.md"],
            "JavaScript": ["README.md"],
            "Python": {
                "Scrappers": ["README.md"],
                "Web Scraping": ["README.md"],
                
            },
            "": ["README.md"]
        }
    }

    create_folders_and_files(base_path, folder_structure)
    print(f"Folders and files have been created at {base_path}")

if __name__ == "__main__":
    main()

    # folder_structure = """
    # projects/
    # ├── nextjs/
    # ├── nodejs/
    # │   ├── README.md/
    # ├── php/
    # │   ├── README.md/
    # ├── javascript/
    # │   ├── README.md/
    # └── python/
    #     ├── Scrappers/
    #     │   ├── README.md/
    #     └── Web Scraping/
    #         ├── README.md/
    #     ├── README.md/
    # """
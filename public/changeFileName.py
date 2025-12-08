import os

# Path folder target
folder_path = r"C:\portofolio-website\mbell\public\assets\preWedding"

# Ambil semua file dalam folder
files = os.listdir(folder_path)

# Filter hanya file gambar (opsional, misalnya jpg/png/jpeg)
image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.heic', '.cr2'))]

# Urutkan agar konsisten
image_files.sort()

# Loop untuk rename
for idx, filename in enumerate(image_files, start=1):
    # Ekstensi file asli
    ext = os.path.splitext(filename)[1]
    
    # Nama baru dengan format akad_01, akad_02, dst.
    new_name = f"preWedding_{idx:02d}{ext}"
    
    # Path lama dan baru
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    
    # Rename file
    os.rename(old_path, new_path)
    print(f"Renamed: {filename} -> {new_name}")

print("Selesai mengganti nama file.")
cmake_minimum_required(VERSION 3.5 FATAL_ERROR)

# setting untuk folder cmake
set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_CURRENT_SOURCE_DIR}/cmake")

# setting untuk source code
set(SOURCE_FILE
	src/main.cpp
)

# setting untuk output path dari file xecutable
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)

# setting untuk file executable nya
add_executable(db-tutorial ${SOURCE_FILE})

# cari package yang dibutuhkan
find_package (SQLite3)

if (SQLITE3_FOUND)
  include_directories(${SQLITE_INCLUDE_DIRS})
  target_link_libraries (db-tutorial sqlite3)
endif (SQLITE3_FOUND)




# C++ BASIC OF SQlite3

## 1. Installation
open your terminal and type : 
* ```sudo apt update```
* ```sudo apt-get install libsqlite3```


## 2. First App
If you wish to make the first Apps using SQLite3 Library, follow this instruction :
1. open your terminal, make directory and file :
   * ``` mkdir src ``` 
   * ``` mkdir cmake ```
   * ``` mkdir build ```
   * ``` mkdir bin ```
   * ``` touch src/main.cpp ```
   * ``` touch cmake/FindSQLite3.cmake ```
   * ``` touch CMakeLists.txt ```
2. write the source code for each file bellow like this :
   * ``` /src/main.cpp ```
     ```c++
        /*
            src/main.cpp
            ade.suhada@mail.ugm.ac.id
            beijing, 1th august, 2019 
        */
        #include <stdio.h>
        #include <sqlite3.h>

        int main(int argc, char* argv[]) {
        sqlite3 *db;
        char *zErrMsg = 0;
        int rc;

        rc = sqlite3_open("test.db", &db);

        if( rc ) {
            fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
            return(0);
        } else {
            fprintf(stderr, "Opened database successfully\n");
        }
        sqlite3_close(db);

        return 0;
        }
     ```
   * ``` CMakeLists.txt ```
     ```cmake
        # CMakeLists.txt
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
     ```
   * ``` cmake/FindSQLite3.cmake ```
     ```cmake
        # - Find SQLite3 include directory and library
        #
        #  SQLITE3_INCLUDE_DIRS - Where to find SQLite3 includes, etc.
        #  SQLITE3_LIBRARIES    - List of libraries when using SQLite3.
        #  SQLITE3_FOUND        - Set to TRUE if SQLite3 is found.

        find_path(SQLITE3_INCLUDE_DIR sqlite3.h)

        set(SQLITE3_INCLUDE_DIRS ${SQLITE3_INCLUDE_DIR})

        find_library(SQLITE3_LIBRARY sqlite3)

        set(SQLITE3_LIBRARIES ${SQLITE3_LIBRARY})

        include(FindPackageHandleStandardArgs)
        find_package_handle_standard_args(SQLite3
            DEFAULT_MSG SQLITE3_LIBRARIES SQLITE3_INCLUDE_DIRS
        )
     ```
3. compile the source code following the command:
   * ``` cd build ```
   * ``` cmake ../ ```
   * the output will be stored at ```bin/db-tutorial```
   * run the binary file ```./../bin/db-tutorial ```
   * the output of binary file
        ```bash
            Opened database successfully
        ```


[<< BACK](../README.md)
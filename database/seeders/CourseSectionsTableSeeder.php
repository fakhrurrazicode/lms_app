<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseSectionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_sections')->delete();
        
        \DB::table('course_sections')->insert(array (
            0 => 
            array (
                'id' => 3,
                'course_id' => 1,
                'title' => 'Pemrograman Berbasis Fungsi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'course_id' => 1,
                'title' => 'Struktur Data Dasar',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 1,
                'course_id' => 1,
                'title' => 'Pengenalan Python',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'course_id' => 2,
                'title' => 'Dasar-Dasar Algoritma',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'course_id' => 2,
                'title' => 'Struktur Data Linear',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'course_id' => 2,
                'title' => 'Struktur Data Non-Linear',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'course_id' => 3,
                'title' => 'Pengenalan Full-Stack Development',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'course_id' => 3,
                'title' => 'Backend dengan Express.js dan MySQL',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'course_id' => 3,
                'title' => 'Frontend dengan Next.js',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'course_id' => 4,
                'title' => 'Pengenalan Web Development',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'course_id' => 4,
                'title' => 'HTML dan Struktur Dasar',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'course_id' => 4,
                'title' => 'CSS dan Styling',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'course_id' => 5,
                'title' => 'Pengenalan Machine Learning',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'course_id' => 5,
                'title' => 'Regresi dan Klasifikasi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'course_id' => 5,
                'title' => 'Evaluasi Model',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'course_id' => 6,
                'title' => 'Dasar-Dasar Data Science',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'course_id' => 6,
                'title' => 'Manipulasi Data dengan Pandas',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'course_id' => 6,
                'title' => 'Analisis Data dengan NumPy',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'course_id' => 7,
                'title' => 'Pengenalan API dan Express.js',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'course_id' => 7,
                'title' => 'Membuat REST API dengan Express',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 21,
                'course_id' => 7,
                'title' => 'Menghubungkan API dengan MongoDB',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 22,
                'course_id' => 8,
                'title' => 'Pengenalan Microservices',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 23,
                'course_id' => 8,
                'title' => 'Membuat Microservice dengan Spring Boot',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            23 => 
            array (
                'id' => 24,
                'course_id' => 8,
                'title' => 'Komunikasi Antar Microservices',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            24 => 
            array (
                'id' => 25,
                'course_id' => 9,
                'title' => 'Dasar-Dasar Ethical Hacking',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            25 => 
            array (
                'id' => 26,
                'course_id' => 9,
                'title' => 'Teknik Footprinting dan Reconnaissance',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            26 => 
            array (
                'id' => 27,
                'course_id' => 9,
                'title' => 'Eksploitasi dan Post Exploitation',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            27 => 
            array (
                'id' => 28,
                'course_id' => 10,
                'title' => 'Pengenalan Keamanan Siber untuk Bisnis',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            28 => 
            array (
                'id' => 29,
                'course_id' => 10,
                'title' => 'Manajemen Risiko Keamanan',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            29 => 
            array (
                'id' => 30,
                'course_id' => 10,
                'title' => 'Keamanan Data dan Privasi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            30 => 
            array (
                'id' => 31,
                'course_id' => 11,
                'title' => 'Pengenalan React Native',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            31 => 
            array (
                'id' => 32,
                'course_id' => 11,
                'title' => 'Membuat Komponen dan Navigasi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            32 => 
            array (
                'id' => 33,
                'course_id' => 11,
                'title' => 'Menghubungkan Aplikasi dengan API',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            33 => 
            array (
                'id' => 34,
                'course_id' => 12,
                'title' => 'Dasar-Dasar Kotlin',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            34 => 
            array (
                'id' => 35,
                'course_id' => 12,
                'title' => 'Membuat Aplikasi Android dengan Kotlin',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            35 => 
            array (
                'id' => 36,
                'course_id' => 12,
                'title' => 'Manajemen State dalam Android',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            36 => 
            array (
                'id' => 37,
                'course_id' => 13,
                'title' => 'Pengantar Jaringan Komputer',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            37 => 
            array (
                'id' => 38,
                'course_id' => 13,
                'title' => 'Model OSI dan TCP/IP',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            38 => 
            array (
                'id' => 39,
                'course_id' => 13,
                'title' => 'Keamanan Jaringan Dasar',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            39 => 
            array (
                'id' => 40,
                'course_id' => 14,
                'title' => 'Pengenalan Jaringan Cisco',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            40 => 
            array (
                'id' => 41,
                'course_id' => 14,
                'title' => 'Konfigurasi Dasar Router dan Switch',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            41 => 
            array (
                'id' => 42,
                'course_id' => 14,
                'title' => 'Troubleshooting Jaringan',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            42 => 
            array (
                'id' => 43,
                'course_id' => 15,
                'title' => 'Pengenalan DevOps',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            43 => 
            array (
                'id' => 44,
                'course_id' => 15,
                'title' => 'Dasar-Dasar Docker',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            44 => 
            array (
                'id' => 45,
                'course_id' => 15,
                'title' => 'Manajemen Cluster dengan Kubernetes',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            45 => 
            array (
                'id' => 46,
                'course_id' => 16,
                'title' => 'Pengenalan Cloud Computing',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            46 => 
            array (
                'id' => 47,
                'course_id' => 16,
                'title' => 'Layanan AWS yang Paling Umum',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            47 => 
            array (
                'id' => 48,
                'course_id' => 16,
                'title' => 'Keamanan dan Skalabilitas di AWS',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            48 => 
            array (
                'id' => 49,
                'course_id' => 17,
                'title' => 'Dasar-Dasar Chatbot',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            49 => 
            array (
                'id' => 50,
                'course_id' => 17,
                'title' => 'Mengenal Google Dialogflow',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            50 => 
            array (
                'id' => 51,
                'course_id' => 17,
                'title' => 'Integrasi Chatbot dengan Node.js',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            51 => 
            array (
                'id' => 52,
                'course_id' => 18,
                'title' => 'Pengenalan Voice Assistant',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            52 => 
            array (
                'id' => 53,
                'course_id' => 18,
            'title' => 'Pemrosesan Bahasa Alami (NLP)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            53 => 
            array (
                'id' => 54,
                'course_id' => 18,
                'title' => 'Implementasi dengan Google Assistant API',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            54 => 
            array (
                'id' => 55,
                'course_id' => 19,
                'title' => 'Pengenalan Blockchain',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            55 => 
            array (
                'id' => 56,
                'course_id' => 19,
                'title' => 'Cryptocurrency dan Teknologi di Baliknya',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            56 => 
            array (
                'id' => 57,
                'course_id' => 19,
                'title' => 'Keamanan dan Skalabilitas Blockchain',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            57 => 
            array (
                'id' => 58,
                'course_id' => 20,
                'title' => 'Dasar-Dasar Smart Contract',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            58 => 
            array (
                'id' => 59,
                'course_id' => 20,
                'title' => 'Pengembangan Smart Contract dengan Solidity',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            59 => 
            array (
                'id' => 60,
                'course_id' => 20,
                'title' => 'Deploy dan Interaksi Smart Contract',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            60 => 
            array (
                'id' => 61,
                'course_id' => 21,
                'title' => 'Dasar-Dasar UI/UX Design',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            61 => 
            array (
                'id' => 62,
                'course_id' => 21,
                'title' => 'Prototyping dengan Figma',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            62 => 
            array (
                'id' => 63,
                'course_id' => 21,
                'title' => 'Prototyping dengan Adobe XD',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            63 => 
            array (
                'id' => 64,
                'course_id' => 22,
                'title' => 'Dasar-Dasar UI/UX',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            64 => 
            array (
                'id' => 65,
                'course_id' => 22,
                'title' => 'Proses Desain UI/UX',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            65 => 
            array (
                'id' => 66,
                'course_id' => 22,
                'title' => 'Testing dan Evaluasi UX',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            66 => 
            array (
                'id' => 67,
                'course_id' => 23,
                'title' => 'Pengenalan IoT dan Arduino',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            67 => 
            array (
                'id' => 68,
                'course_id' => 23,
                'title' => 'Sensor dan Aktuator dalam IoT',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            68 => 
            array (
                'id' => 69,
                'course_id' => 23,
                'title' => 'Komunikasi Data pada IoT',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            69 => 
            array (
                'id' => 70,
                'course_id' => 24,
                'title' => 'Pengenalan Raspberry Pi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            70 => 
            array (
                'id' => 71,
                'course_id' => 24,
                'title' => 'Pengolahan Data di Raspberry Pi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            71 => 
            array (
                'id' => 72,
                'course_id' => 24,
                'title' => 'Implementasi IoT dengan Raspberry Pi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            72 => 
            array (
                'id' => 73,
                'course_id' => 25,
                'title' => 'Dasar-Dasar Unity',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            73 => 
            array (
                'id' => 74,
                'course_id' => 25,
                'title' => 'Pemrograman C# untuk Game Development',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            74 => 
            array (
                'id' => 75,
                'course_id' => 25,
                'title' => 'Membuat Game Sederhana',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            75 => 
            array (
                'id' => 76,
                'course_id' => 26,
                'title' => 'Pengenalan Unreal Engine',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            76 => 
            array (
                'id' => 77,
                'course_id' => 26,
                'title' => 'Blueprints dan Visual Scripting',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            77 => 
            array (
                'id' => 78,
                'course_id' => 26,
                'title' => 'Membuat Game 3D dengan Unreal Engine',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            78 => 
            array (
                'id' => 79,
                'course_id' => 27,
                'title' => 'Pengenalan PostgreSQL',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            79 => 
            array (
                'id' => 80,
                'course_id' => 27,
                'title' => 'Query dan Optimasi Database',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            80 => 
            array (
                'id' => 81,
                'course_id' => 27,
                'title' => 'Administrasi dan Keamanan Database',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            81 => 
            array (
                'id' => 82,
                'course_id' => 28,
                'title' => 'Dasar-Dasar Query Optimization',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            82 => 
            array (
                'id' => 83,
                'course_id' => 28,
                'title' => 'Menggunakan Indexing dengan Efektif',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            83 => 
            array (
                'id' => 84,
                'course_id' => 28,
                'title' => 'Teknik Optimasi Lanjutan',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            84 => 
            array (
                'id' => 85,
                'course_id' => 29,
                'title' => 'Dasar-Dasar Software Testing',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            85 => 
            array (
                'id' => 86,
                'course_id' => 29,
                'title' => 'Penggunaan Framework Otomasi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            86 => 
            array (
                'id' => 87,
                'course_id' => 29,
                'title' => 'Continuous Testing dan CI/CD',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            87 => 
            array (
                'id' => 88,
                'course_id' => 30,
                'title' => 'Pengenalan Security Testing',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            88 => 
            array (
                'id' => 89,
                'course_id' => 30,
                'title' => 'Metode Penetration Testing',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            89 => 
            array (
                'id' => 90,
                'course_id' => 30,
                'title' => 'Keamanan Aplikasi dan Best Practices',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            90 => 
            array (
                'id' => 91,
                'course_id' => 32,
                'title' => 'Section 1 Update',
                'created_at' => '2025-03-25 21:09:20',
                'updated_at' => '2025-03-26 21:11:42',
            ),
            91 => 
            array (
                'id' => 92,
                'course_id' => 33,
                'title' => 'Introductions',
                'created_at' => '2025-04-12 02:52:06',
                'updated_at' => '2025-04-12 02:52:06',
            ),
            92 => 
            array (
                'id' => 93,
                'course_id' => 33,
                'title' => 'Basic Structure and Components',
                'created_at' => '2025-04-12 02:52:46',
                'updated_at' => '2025-04-12 02:52:46',
            ),
        ));
        
        
    }
}
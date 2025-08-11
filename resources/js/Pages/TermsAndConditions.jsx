import CourseCard from "@/Components/CourseCard";
import TiltElement from "@/Components/TiltElement";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { FaChartBar, FaChartLine } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight, FiBookOpen } from "react-icons/fi";
import { MdOutlineCheck } from "react-icons/md";
import { RiTriangleLine } from "react-icons/ri";

export default function Home({ latest_courses, course_categories }) {
    const page = usePage();

    return (
        <FrontendLayout>
            <Head title="Home" />

            <section id="hero" className="">
                <div className="container mx-auto px-4 py-12">
                    <div className="card bg-base-100 ">
                        <div className="card-body">
                            <div className="prose !max-w-full">
                                <div>
                                    <h1>
                                        SYARAT DAN KETENTUAN PENGGUNAAN APLIKASI
                                        LEARNING MANAGEMENT SYSTEM (LMS)
                                        <br />
                                        guruteknik.id
                                    </h1>

                                    <ol>
                                        <li>
                                            <strong>
                                                Penerimaan Syarat dan Ketentuan
                                            </strong>
                                            <br />
                                            Dengan mengakses atau menggunakan
                                            Aplikasi Learning Management System
                                            (LMS) di guruteknik.id, Anda setuju
                                            untuk terikat oleh Syarat dan
                                            Ketentuan ("S&K") ini, serta
                                            Kebijakan Privasi kami. Jika Anda
                                            tidak setuju, harap hentikan
                                            penggunaan layanan ini.
                                        </li>

                                        <li>
                                            <strong>Definisi</strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    "Kami" merujuk pada
                                                    guruteknik.id sebagai
                                                    penyedia layanan.
                                                </li>
                                                <li>
                                                    "Anda" merujuk pada pengguna
                                                    (guru, siswa, administrator,
                                                    atau pihak lain) yang
                                                    mengakses LMS.
                                                </li>
                                                <li>
                                                    "Aplikasi LMS" adalah
                                                    platform pembelajaran daring
                                                    milik guruteknik.id.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>Akun Pengguna</strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    Anda harus mendaftar dengan
                                                    informasi akurat dan menjaga
                                                    kerahasiaan akun.
                                                </li>
                                                <li>
                                                    Anda bertanggung jawab atas
                                                    semua aktivitas yang terjadi
                                                    di bawah akun Anda.
                                                </li>
                                                <li>
                                                    Kami berhak
                                                    menangguhkan/menutup akun
                                                    jika ditemukan pelanggaran.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>
                                                Hak Akses dan Penggunaan
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    Akses diberikan sesuai peran
                                                    (siswa, guru, admin) dengan
                                                    fitur yang ditentukan.
                                                </li>
                                                <li>
                                                    Dilarang menggunakan LMS
                                                    untuk tujuan ilegal,
                                                    plagiarisme, atau melanggar
                                                    hak kekayaan intelektual.
                                                </li>
                                                <li>
                                                    Konten pembelajaran (materi,
                                                    video, dokumen) adalah milik
                                                    penyedia atau pihak
                                                    berlisensi.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>Kewajiban Pengguna</strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    Tidak menyebarkan spam,
                                                    malware, atau konten tidak
                                                    pantas (misalnya: SARA,
                                                    pornografi).
                                                </li>
                                                <li>
                                                    Tidak melakukan reverse
                                                    engineering, menyalin, atau
                                                    mengeksploitasi sistem LMS.
                                                </li>
                                                <li>
                                                    Mematuhi peraturan akademik
                                                    dan etika pembelajaran.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>
                                                Pembayaran (Jika Berlaku)
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    Biaya berlangganan atau
                                                    layanan premium harus
                                                    dibayar sesuai ketentuan.
                                                </li>
                                                <li>
                                                    Pembatalan atau pengembalian
                                                    dana mengikuti kebijakan
                                                    yang ditetapkan.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>Privasi Data</strong>
                                            <br />
                                            Pengumpulan dan penggunaan data
                                            pribadi diatur dalam Kebijakan
                                            Privasi kami.
                                        </li>

                                        <li>
                                            <strong>
                                                Pembatasan Tanggung Jawab
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    Kami tidak menjamin
                                                    kelancaran akses tanpa
                                                    gangguan atau kesalahan
                                                    teknis.
                                                </li>
                                                <li>
                                                    Kami tidak bertanggung jawab
                                                    atas kerugian tidak langsung
                                                    akibat penggunaan LMS.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>
                                                Perubahan dan Penghentian
                                                Layanan
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    Kami dapat mengubah S&K atau
                                                    fitur LMS dengan
                                                    pemberitahuan sebelumnya.
                                                </li>
                                                <li>
                                                    Layanan dapat dihentikan
                                                    sementara/permanen tanpa
                                                    pemberitahuan dalam keadaan
                                                    darurat.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>Hukum yang Berlaku</strong>
                                            <br />
                                            S&K ini tunduk pada hukum Republik
                                            Indonesia. Sengketa akan
                                            diselesaikan secara musyawarah atau
                                            melalui pengadilan di wilayah hukum
                                            kami.
                                        </li>

                                        <li>
                                            <strong>Kontak</strong>
                                            <br />
                                            Pertanyaan atau klaim dapat diajukan
                                            ke:
                                            <br />
                                            <strong>Email:</strong>{" "}
                                            support@guruteknik.com
                                            <br />
                                            <strong>Alamat:</strong> PIK2 Rukan
                                            Osaka OTPA No. 18 Salembaran Jati,
                                            Kec. Kosambi, Kabupaten Tangerang,
                                            Banten 15214, Jawa Barat 15214
                                        </li>
                                    </ol>

                                    <p>
                                        Dengan menggunakan LMS guruteknik.id,
                                        Anda mengonfirmasi telah membaca,
                                        memahami, dan menyetujui seluruh
                                        ketentuan di atas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}

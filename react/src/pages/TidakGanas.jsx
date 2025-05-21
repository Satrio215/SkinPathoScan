import React from "react";

const TidakGanas = () => {
    const kankerList = [
        {
            title: "Moluskum Kontagiosium",
            description:
                "Moluskum kontagiosum adalah infeksi kulit menular yang disebabkan oleh virus Molluscum contagiosum. Penyakit ini umumnya menyerang anak-anak dan ditandai dengan benjolan kecil berbentuk bulat dengan lekukan di tengah. Lesi bisa menyebar melalui kontak langsung atau benda yang terkontaminasi. Meskipun bisa menyebabkan gatal, penyakit ini biasanya tidak berbahaya dan dapat sembuh sendiri dalam 6–12 bulan tanpa pengobatan.",
            image: "/Moluskum.png",
        },
        {
            title: "Papiloma",
            description:
                "Papiloma adalah neoplasma jinak yang tumbuh menonjol dari permukaan kulit atau mukosa, berbentuk seperti jari atau tonjolan papiler. Lesi ini sering disebabkan oleh infeksi Human Papillomavirus (HPV) dan dapat muncul di berbagai area tubuh seperti leher, wajah, kelopak mata, atau area genital. Papiloma biasanya tidak berbahaya, namun bisa menyebabkan gangguan estetika atau iritasi, dan dalam beberapa kasus bisa diangkat jika mengganggu.",
            image: "/Papiloma.png",
        },
        {
            title: "Naevus Pigmentosus",
            description:
                "Merupakan tumor jinak yang timbul darisel-sel nevus. Pada umumnya dikenal sebagai andeng-andeng yang tidak bertambah besar dan terdapat dimana saja. Biasanya secara kosmetik dianggap kurang serasisehingga tumor diekstirpasi. Lokasi : Seluruh tubuh. Bisa terjadi pada semua umur. Frekuensi pria sama denganwanita.",
            image: "/Naevus.png",
        },
        {
            title: "Abses Kulit",
            description:
                "Abses adalah kumpulan nanah yang terbentuk dalam rongga baru akibat infeksi, biasanya oleh bakteri seperti Staphylococcus aureus. Merupakan peradangan purulen lokal dengan batas tegas. Gejalanya meliputi benjolan merah, nyeri, hangat, dan kadang disertai demam. Jika tidak ditangani, abses bisa membesar atau menyebar. Pengobatan umumnya dengan insisi dan drainase, serta pemberian antibiotik sesuai penyebab infeksinya.",
            image: "/Abses.png",
        },
    ];

    return (
        <div className="text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-54 py-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4">
                Kanker Kulit Ganas
            </h1>

            <p className="text-base leading-relaxed w-full mb-6">
                Semua kanker jinak umumnya berdiferensiasi baik. Sebagai contoh
                kanker jinak otot polos yaitu leiomioma uteri. Sel tumornya
                menyerupai sel otot polos. Demikian pula lipoma yaitu kanker
                jinak berasal dari jaringan lemak, sel tumornya terdiri atas sel
                lemak matur,menyerupai sel jaringan lemak normal.
            </p>

            <p className="text-base leading-relaxed w-full mb-10">
                kanker jinak biasanya tumbuh lambat sedangkan tumor ganas cepat.
                Tetapi derajat kecepatan tumbuh tumor jinak tidak tetap,kadang –
                kadang tumor jinak tumbuh lebih cepat daripada tumor ganas.
                Karena tergantung pada hormone yang mempengaruhi dan adanya
                penyediaan darah yang memadai. Pada dasarnya derajat pertumbuhan
                tumor berkaitan dengan tingkat diferensiasi sehingga kebanyakan
                tumor ganas tumbuh lebih cepat daripada tumor jinak.
            </p>

            {kankerList.map((kanker, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-start gap-6 mb-12"
                >
                    <div className="md:w-2/3">
                        <h2 className="text-xl font-semibold mb-2">
                            {kanker.title}
                        </h2>
                        <p className="text-base leading-relaxed text-white/90">
                            {kanker.description}
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <img
                            src={kanker.image}
                            alt={kanker.title}
                            className="rounded-xl w-80 h-80 object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TidakGanas; // <--- PENTING!

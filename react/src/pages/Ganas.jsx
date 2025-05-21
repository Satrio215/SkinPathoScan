import React from "react";

const kankerList = [
  {
    title: "Melanoma",
    description: `Melanoma adalah jenis kanker kulit ganas yang paling berbahaya karena memiliki kemampuan tinggi untuk menyebar ke bagian tubuh lain jika tidak ditangani secara dini. Melanoma berasal dari melanosit, yaitu sel-sel yang memproduksi melanin, pigmen pemberi warna pada kulit. Biasanya, melanoma muncul dalam bentuk tahi lalat baru atau perubahan pada tahi lalat yang sudah ada, seperti perubahan warna, bentuk, ukuran, atau permukaan. Salah satu cara umum untuk mengenali gejala awal melanoma adalah dengan aturan ABCDE: Asymmetry, Border (tepi tidak rata), Color (warna tidak merata), Diameter (lebih dari 6mm), dan Evolving (perubahan sering terjadi). Faktor risiko melanoma meliputi paparan sinar UV yang berlebihan, kulit terang, riwayat keluarga dengan melanoma, serta jumlah tahi lalat yang banyak atau tidak biasa. Deteksi dini sangat penting karena melanoma stadium awal dapat diobati dengan operasi dan memiliki tingkat kesembuhan yang tinggi, sementara melanoma stadium lanjut lebih sulit ditangani dan bisa mengancam jiwa.`,
    image: "/melanoma.jpeg",
  },
  {
    title: "Karsinoma Sel Skuamosa",
    description: `Karsinoma sel skuamosa (Squamous Cell Carcinoma/SCC) adalah salah satu jenis kanker kulit ganas yang berasal dari sel skuamosa, yaitu sel datar yang membentuk lapisan tengah dan luar kulit. Kanker ini umumnya berkembang di area tubuh yang sering terpapar sinar UV seperti wajah, telinga, leher, tangan, dan lengan, namun juga bisa muncul di bagian tubuh lain, termasuk pada luka lama atau kulit yang mengalami peradangan kronis. Secara klinis, SCC dapat tampak sebagai benjolan keras yang kemerahan, luka yang tidak sembuh-sembuh, kerak yang menebal, atau pertumbuhan menyerupai kutil. Berbeda dengan kanker kulit jenis basal, SCC memiliki kemampuan untuk tumbuh lebih agresif dan menyebar ke jaringan sekitarnya atau organ dalam jika tidak segera ditangani. Penyebab utamanya adalah paparan sinar ultraviolet (UV), namun juga dapat dipicu oleh infeksi HPV, sistem kekebalan tubuh yang lemah, serta paparan zat karsinogenik seperti arsenik. Penanganan biasanya dilakukan melalui bedah eksisi, kuretase, terapi beku (cryotherapy), atau radioterapi tergantung pada lokasi dan tingkat keparahan kanker. Pencegahan melalui perlindungan terhadap sinar UV dan deteksi dini sangat penting untuk menghindari komplikasi serius akibat SCC.`,
    image: "/karsinoma.jpeg",
  },
  {
    title: "Merkel Cell Carcinoma",
    description: `Merkel Cell Carcinoma (MCC) adalah jenis kanker kulit ganas yang langka namun sangat agresif, yang berasal dari sel Merkel—sel neuroendokrin yang berada di lapisan atas kulit dan berperan dalam persepsi sentuhan. MCC biasanya muncul sebagai benjolan keras, tidak nyeri, berwarna merah atau kebiruan, dan sering tumbuh dengan cepat. Lokasinya paling sering ditemukan di area tubuh yang sering terpapar sinar matahari, seperti wajah, leher, dan lengan. Meskipun jarang, MCC sangat berpotensi untuk menyebar ke organ dalam dan kelenjar getah bening (metastasis) ke kelenjar getah bening dan organ dalam hanya dalam waktu singkat. Faktor risiko MCC meliputi paparan sinar ultraviolet (UV), usia lanjut, kulit cerah, sistem imun yang lemah (misalnya pada penderita HIV/AIDS atau pasien transplantasi organ), serta infeksi oleh Merkel cell polyomavirus (MCPyV)—virus yang ditemukan pada sebagian besar kasus MCC. Karena gejalanya bisa menyerupai benjolan kulit biasa, deteksi dini menjadi tantangan. Diagnosis MCC dilakukan melalui biopsi kulit dan pemeriksaan lanjutan seperti CT scan atau PET scan untuk melihat penyebaran. Pengobatan utama biasanya meliputi operasi pengangkatan tumor, radioterapi, dan imunoterapi. Prognosis pasien sangat bergantung pada stadium saat didiagnosis, sehingga penting untuk segera memeriksakan diri ke dokter kulit jika muncul benjolan kulit mencurigakan yang cepat membesar.`,
    image: "/merkel.jpeg",
  },
];

const Ganas = () => {
  return (
<div className="text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-54 py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4">Kanker Kulit Ganas</h1>

      <p className="text-base leading-relaxed w-full mb-6">
        Kanker kulit ganas adalah jenis kanker kulit yang bersifat ganas atau malignant, artinya sel-sel abnormal pada kulit tumbuh secara tidak terkendali dan dapat menyebar ke jaringan lain di tubuh (metastasis). Salah satu bentuk kanker kulit ganas yang paling berbahaya adalah melanoma, yang berasal dari sel penghasil pigmen kulit (melanosit). Selain melanoma, terdapat juga jenis kanker kulit ganas lainnya seperti karsinoma sel basal (basal cell carcinoma) dan karsinoma sel skuamosa (squamous cell carcinoma). Kanker kulit ganas umumnya disebabkan oleh paparan sinar ultraviolet (UV) yang berlebihan dari matahari atau alat tanning buatan, terutama tanpa perlindungan yang memadai. Gejalanya bisa berupa perubahan bentuk, warna, atau ukuran pada tahi lalat atau bercak kulit, luka yang tidak sembuh-sembuh, atau benjolan yang terasa gatal atau berdarah. Deteksi dini sangat penting karena kanker kulit ganas yang ditemukan lebih awal memiliki peluang kesembuhan yang lebih tinggi melalui tindakan medis seperti operasi, terapi radiasi, atau imunoterapi. Edukasi tentang perlindungan kulit dan pemeriksaan rutin sangat penting untuk mencegah dan menangani kanker kulit ganas secara efektif.
      </p>

      <p className="text-base leading-relaxed w-full mb-10">
        Untuk mencegah kanker kulit ganas, penting bagi setiap individu untuk melindungi kulit dari paparan sinar ultraviolet (UV) secara berlebihan. Langkah pencegahan utama meliputi penggunaan tabir surya (sunscreen) dengan SPF minimal 30 setiap hari, mengenakan pakaian pelindung seperti topi dan baju lengan panjang saat berada di luar ruangan, serta menghindari sinar matahari langsung terutama pada pukul 10 pagi hingga 4 sore ketika intensitas UV berada di puncaknya. Selain itu, hindari penggunaan alat tanning buatan karena juga memancarkan sinar UV berbahaya. Pemeriksaan kulit secara berkala—baik secara mandiri maupun oleh tenaga medis—sangat dianjurkan untuk mendeteksi perubahan mencurigakan pada kulit sedini mungkin. Edukasi dan kesadaran tentang bahaya sinar UV serta pentingnya perlindungan kulit harus dimulai sejak usia dini guna menekan angka kejadian kanker kulit ganas di masyarakat.
      </p>

      {kankerList.map((kanker, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-start gap-6 mb-12"
        >
          <div className="md:w-2/3">
            <h2 className="text-xl font-semibold mb-2">{kanker.title}</h2>
            <p className="text-base leading-relaxed text-white/90">{kanker.description}</p>
          </div>
          <div className="md:w-1/3">
            <img
              src={kanker.image}
              alt={kanker.title}
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ganas;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import Head from "next/head";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.lang = "tr";
  }, []);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <Head>
        <title>Çelikon Yapı | Çelik Konstrüksiyon, Köprü, Depo ve Yapı</title>
        <meta name="description" content="Çelik konstrüksiyon, çelik köprü, çelik depo ve çelik yapı alanında uzman firma. Türkiye ve uluslararası projelerde deneyim." />
        <meta name="keywords" content="çelik konstrüksiyon, çelik köprü, çelik depo, çelik yapı, steel construction, steel bridge, steel warehouse, steel structure, estructura de acero, puente de acero, almacén de acero, construcción de acero, الإنشاءات الفولاذية, الجسر الفولاذي, مستودع فولاذي, الهيكل الصلب" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Çelikon Yapı</h1>
        <p className="text-lg md:text-xl">Çelik Konstrüksiyon, Köprü, Depo ve Yapı Uzmanı</p>
        <Button className="mt-4">Bize Ulaşın</Button>
      </header>

      <section className="mt-12 space-y-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Hakkımızda</h2>
            <p>Çelikon Yapı olarak, çelik yapı sektöründe yılların verdiği tecrübe ile yurt içi ve yurt dışında birçok başarılı projeye imza attık. Uzman mühendislik kadromuz, kalite standartlarımız ve zamanında teslimat prensibimizle sektörde öncü konumdayız.</p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card><CardContent className="p-6"><h2 className="text-2xl font-semibold mb-2">Çelik Konstrüksiyon</h2><p>Endüstriyel ve ticari yapılar için güçlü ve dayanıklı çelik konstrüksiyon çözümleri sunuyoruz.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-2xl font-semibold mb-2">Çelik Köprüler</h2><p>Yaya ve araç geçişi için modern ve güvenli çelik köprüler inşa ediyoruz.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-2xl font-semibold mb-2">Çelik Depolar</h2><p>Depolama ihtiyaçlarınıza özel çelik depo çözümleri geliştiriyoruz.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-2xl font-semibold mb-2">Çelik Yapılar</h2><p>Sanayi, lojistik ve ticari yapılar için komple çelik yapı sistemleri sunmaktayız.</p></CardContent></Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Projelerimiz</h2>
            <p>Firmamızın hayata geçirdiği bazı projeler: Ankara Lojistik Merkezi, İzmir Yaya Köprüsü, İstanbul Fabrika Deposu, Tekirdağ Tarım Yapıları. Her biri, kalite ve mühendislik anlayışımızın bir yansımasıdır.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">İletişim</h2>
            <p>Bizimle iletişime geçmek için info@celikonyapi.com adresine e-posta gönderebilir veya iletişim formumuzu doldurabilirsiniz.</p>
            <form className="mt-4 space-y-2">
              <Input type="text" placeholder="Adınız" />
              <Input type="email" placeholder="E-posta adresiniz" />
              <Input type="text" placeholder="Mesajınız" />
              <Button type="submit">Gönder</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 Çelikon Yapı. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

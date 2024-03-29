# Todo App

Bu Todo App, modern web teknolojileri kullanılarak geliştirilmiştir. Proje, Next.js 14, Bootstrap 5, TypeScript ve Firebase'i bir araya getirerek, kullanıcı dostu bir Todo listesi uygulaması sunar. Uygulama, kullanıcıların todo öğeleri eklemesine, güncellemesine ve silinmesine olanak tanır.

## Özellikler

- Todo öğeleri ekleme ve güncelleme
- Firebase üzerinden veri yönetimi
- Dinamik ve responsif kullanıcı arayüzü
- TypeScript'in sağladığı tip güvenliği

## Klasör Yapısı

- `app/`: Uygulamanın çekirdek fonksiyonlarını içerir (todo ekleme, güncelleme, API işlemleri).
  - `add/`: Yeni todo eklemek için kullanılan bileşenler.
  - `update/[id]`: Var olan todo'yu güncellemek için kullanılan bileşenler.
  - `api/tasks`: Firebase ile iletişim kurmak için API endpoint'leri.
  - `page.tsx`: Ana sayfa bileşeni.
  - `layout.tsx`: Uygulamanın genel düzenini tanımlayan bileşen.
- `components/`: Tekrar kullanılabilir UI bileşenlerini içerir.
  - `models/`: Veri modellerini tanımlar (`ITask.tsx`).
  - `molecules/`: Küçük, tekrar kullanılabilir UI bileşenleri.
  - `organisms/`: Moleküler bileşenlerden oluşan daha büyük UI bileşenleri.
- `public/`: Statik dosyalar (resimler, faviconlar vb.).
- `.env`: Uygulamanın konfigürasyon ayarlarını içerir.

## Kurulum

Projeyi yerel geliştirme ortamınıza klonlamak için aşağıdaki adımları takip edin:

```bash
git clone https://github.com/your-repository/todoapp.git
cd todoapp
npm install
```

Firebase ve diğer servisler için gerekli API anahtarlarını ve bilgilerini .env dosyasına ekleyin.

Kullanım

Uygulamayı yerel olarak başlatmak için:

npm run dev
Bu komut, uygulamayı localhost:3000 adresinde başlatır.


![screencapture-localhost-3000-2024-03-29-01_25_19](https://github.com/gamzesirin/anytimetodo-app/assets/155438363/bf56d24d-7c33-4346-906b-4ed26a476697)
![screencapture-localhost-3000-update-3UqdwmTwafoJWXzO2CfG-2024-03-29-01_24_54](https://github.com/gamzesirin/anytimetodo-app/assets/155438363/d87c2df4-c8e1-47c6-a8f1-2e1654dc2e77)
![screencapture-localhost-3000-add-2024-03-29-01_16_47](https://github.com/gamzesirin/anytimetodo-app/assets/155438363/203ffd94-438e-4065-853d-36355e9e03ff)
![screencapture-localhost-3000-2024-03-29-01_16_33](https://github.com/gamzesirin/anytimetodo-app/assets/155438363/98e472f4-631c-4fad-b724-727768065025)




<script>
    import axios from "axios";

    let ayat = $state({});
    let surahInfo = $state({});

    function getRandomAyat() {
        const randomSurah = Math.floor(Math.random() * 114) + 1;

        axios
            .get(`https://api.alquran.cloud/v1/surah/${randomSurah}`)
            .then((res) => {
                const surah = res.data.data;
                const randomAyatIndex = Math.floor(Math.random() * surah.ayahs.length);
                ayat = surah.ayahs[randomAyatIndex];
                console.log(ayat);
                surahInfo = {
                    number: surah.number,
                    name: surah.englishName,
                    translation: surah.englishNameTranslation,
                };
            })
            .catch((err) => {
                console.error("Gagal mengambil ayat:", err);
            });
    }

    $effect(() => {
        getRandomAyat();
    });
</script>

<div class="card bg-white shadow-md p-4 rounded-xl">
    <div class="font-bold text-2xl mb-2">Potongan Ayat Random Hari Ini</div>
    {#if ayat.text}
        <div class="text-right text-xl mb-2">{ayat.text}</div>
        <div class="text-gray-700">
            <span class="font-semibold">{surahInfo.name}</span> - Ayat {ayat.numberInSurah}
        </div>
    {:else}
        <div class="text-gray-500">Sedang memuat...</div>
    {/if}
</div>
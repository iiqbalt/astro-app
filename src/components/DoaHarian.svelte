<script>
    import axios from "axios";

    let doa = $state({});

    function getDoaHarian() {
        axios
            .get("https://open-api.my.id/api/doa")
            .then((res) => {
                console.log("res doa harian", res);
                const randomIndex = Math.floor(Math.random() * res.data.length);
                doa = res.data[randomIndex];
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    $effect(() => {
        getDoaHarian();
    });
</script>

<div class="card">
    <div class="card-body">
        <div class="font-bold text-2xl">Ini adalah bacaan doa harian kamu, mohon dihafalkan yaa</div><br>
        <div class="text-xl">{doa?.judul}</div>
        <div class="text-xl">{doa?.arab}</div>
        <div class="text-md">Artinya : {doa?.terjemah}</div>
    </div>
</div>

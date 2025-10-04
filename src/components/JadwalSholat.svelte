<script>

    import axios from 'axios';

    let jadwal = $state({});
    let keyword = $state("");

    function loadJadwal(){

        axios.get("https://api.myquran.com/v2/sholat/jadwal/1624/2025/10/4").then((res) => {
            console.log("res", res)
            console.log("jadwal", res.data.jadwal)

            jadwal = res.data.data.jadwal
        }).catch((err) => {
            console.log("err", err)
        })
    }

    $effect(() => {
        loadJadwal()

        console.log("ready halo dunia")
    });
</script>

<div>
    
    <!-- <input type="text" name="" bind:value={keyword} id="" class="form-control">
    <div class="text-xs text-gray-300">{keyword}</div> -->

    <table class="table table-hover table-sm">
        <thead>
            <tr>
                <th>Terbit</th>
                <th>Imsak</th>
                <th>Subuh</th>
                <th>Duha</th>
                <th>Dhuhur</th>
                <th>Ashar</th>
                <th>Maghrib</th>
                <th>Isya</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{jadwal?.terbit}</td>
                <td>{jadwal?.imsak}</td>
                <td>{jadwal?.subuh}</td>
                <td>{jadwal?.dhuha}</td>
                <td>{jadwal?.dzuhur}</td>
                <td>{jadwal?.ashar}</td>
                <td>{jadwal?.maghrib}</td>
                <td>{jadwal?.isya}</td>
            </tr>
        </tbody>
    </table>
</div>
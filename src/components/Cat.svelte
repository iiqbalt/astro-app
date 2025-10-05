<script>
    import axios from "axios";

    let result = $state({});

    function getQuote() {
        axios
            .get("https://api.thecatapi.com/v1/images/search")
            .then((res) => {
                console.log("res", res);
                result = res.data[0]
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    $effect(() => {
        getQuote();
    });
</script>

<div class="card">
    <div class="card-body">
        <img src="{result?.url}" class="max-h-[400px] w-[{result.width}] object-contain" alt="">
    </div>
</div>

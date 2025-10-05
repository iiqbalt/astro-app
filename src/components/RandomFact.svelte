<script>
    import axios from "axios";

    let fact = $state({});

    function getQuote() {
        axios
            .get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
            .then((res) => {
                console.log("res", res);
                fact = res.data
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
        <div class="font-bold text-2xl">{fact?.text}</div>
        <a href="{fact?.source_url}" target="_blank" class="font-normal text-sm text-gray-400 mt-2">{fact?.source_url}</a>
    </div>
</div>

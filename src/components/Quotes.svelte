<script>
    import axios from "axios";

    let quote = $state({});

    function getQuote() {
        axios
            .get("https://api.quotable.io/random")
            .then((res) => {
                console.log("res", res);
                quote = res.data
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
        <div class="text-right">
            <i class="fas fa-spinner"></i>
        </div>
        <div class="font-bold text-2xl">{quote?.content}</div>
        <div class="font-normal text-sm text-gray-400 mt-2">{quote?.author}</div>
    </div>
</div>

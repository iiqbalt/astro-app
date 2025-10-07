<script>
    import axios from "axios";
    let quote = $state({});

    function getQuote() {
        axios
        .get("/api/quote")
        .then((res) => {
            console.log("res", res.data);
            quote = res.data;
        })
        .catch((err) => {
            console.error("err", err);
        });
    }

    $effect(() => {
        getQuote();
    });
</script>

<div class="card">
    <div class="card-body">
        <div class="font-bold text-2xl">{quote?.content}</div>
        <div class="font-normal text-sm text-gray-400 mt-2">{quote?.author}</div>
    </div>
</div>

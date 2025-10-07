<script>
    import axios from "axios";
    let quote = {};

    async function getQuote() {
        try {
        const res = await axios.get("/api/quote"); // pakai proxy
        quote = res.data;
        } catch (err) {
        console.error("Error fetching quote:", err);
        }
    }

    $: getQuote();
</script>

<div class="card">
    <div class="card-body">
        <div class="font-bold text-2xl">{quote?.content}</div>
        <div class="font-normal text-sm text-gray-400 mt-2">{quote?.author}</div>
    </div>
</div>

<script>
    import axios from "axios";

    let meme = $state({});

    function getMeme() {
        axios
            .get("https://meme-api.com/gimme")
            .then((res) => {
                console.log("res", res);
                meme = res.data;
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    $effect(() => {
        getMeme();
    });
</script>

<div class="card">
    <div class="card-body text-center">
        <h2 class="font-bold text-xl mb-2">{meme?.title}</h2>

        {#if meme?.url}
            <img
                src={meme.url}
                alt={meme.title}
                class="rounded-lg mx-auto mb-3 max-h-96 object-contain"
            />
        {:else}
            <p>Loading meme...</p>
        {/if}
    </div>
</div>
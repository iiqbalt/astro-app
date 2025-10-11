<script>
    import { onMount } from "svelte";

    let count = 0;
    let items = [];
    let inputs = [];
    let spinning = false;
    let winner = null;
    let rotation = 0;

    function setCount() {
        items = [];
        inputs = Array.from({ length: count }, () => "");
        winner = null;
    }

    function saveItems() {
        items = inputs.filter(i => i.trim() !== "");
        winner = null;
    }

    function spin() {
        if (items.length === 0) return;
        spinning = true;
        winner = null;

        // pilih pemenang random
        const randomIndex = Math.floor(Math.random() * items.length);
        const extraRotations = 5 * 360; // biar muter beberapa kali
        const segmentAngle = 360 / items.length;
        
        // Hitung posisi target yang tepat agar pointer mengarah ke tengah segmen pemenang
        // Rotasi negatif karena kita ingin segmen pemenang bergerak ke posisi pointer (atas)
        const targetAngle = -(randomIndex * segmentAngle + segmentAngle / 2);
        
        // Hitung berapa putaran sudah dilakukan sebelumnya
        const completedRotations = Math.floor(rotation / 360) * 360;
        
        // Set rotasi baru: putaran sebelumnya + putaran tambahan + posisi target
        const newRotation = completedRotations + extraRotations + targetAngle;
        rotation = newRotation;

        setTimeout(() => {
            spinning = false;
            winner = items[randomIndex];
        }, 3000);
    }
</script>

<style>
    .spinner-container {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 20px auto;
        transition: transform 3s cubic-bezier(0.33, 1, 0.68, 1);
    }

    .spinner-svg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 4px solid #ddd;
    }

    .slice-text {
        position: absolute;
        color: white;
        font-weight: bold;
        font-size: 12px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
        text-align: center;
        pointer-events: none;
        transform: translate(-50%, -50%);
        max-width: 60px;
        word-wrap: break-word;
        line-height: 1.1;
    }

    .pointer {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 25px solid red;
        margin: 0 auto;
    }
</style>

<div class="p-4 max-w-md mx-auto text-center">
    <h2 class="text-xl font-bold mb-4">🎯 Random Spinner</h2>

    {#if items.length === 0}
        <div class="mb-3">
            <label class="block mb-1">Masukkan jumlah item:</label>
            <input type="number" bind:value={count} class="border p-1 rounded w-20 text-center" min="1" />
            <button on:click={setCount} class="ml-2 bg-blue-500 text-white px-2 py-1 rounded">OK</button>
        </div>
    {/if}

    {#if inputs.length > 0 && items.length === 0}
        <div class="space-y-2">
            {#each inputs as val, i}
                <input bind:value={inputs[i]} placeholder="Item {i + 1}" class="border p-1 w-full rounded" />
            {/each}
            <button on:click={saveItems} class="mt-3 bg-green-500 text-white px-3 py-1 rounded">Simpan</button>
        </div>
    {/if}

    {#if items.length > 0}
        <div class="pointer mt-4"></div>
        <div
            class="spinner-container mt-4"
            style="transform: rotate({rotation}deg);"
        >
            <svg class="spinner-svg" viewBox="0 0 200 200">
                {#each items as item, i}
                    {@const segmentAngle = 360 / items.length}
                    {@const startAngle = i * segmentAngle - 90}
                    {@const endAngle = (i + 1) * segmentAngle - 90}
                    {@const startAngleRad = (startAngle * Math.PI) / 180}
                    {@const endAngleRad = (endAngle * Math.PI) / 180}
                    {@const largeArcFlag = segmentAngle > 180 ? 1 : 0}
                    {@const x1 = 100 + 95 * Math.cos(startAngleRad)}
                    {@const y1 = 100 + 95 * Math.sin(startAngleRad)}
                    {@const x2 = 100 + 95 * Math.cos(endAngleRad)}
                    {@const y2 = 100 + 95 * Math.sin(endAngleRad)}
                    {@const pathData = `M 100 100 L ${x1} ${y1} A 95 95 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                    {@const textAngle = startAngle + segmentAngle / 2}
                    {@const textAngleRad = (textAngle * Math.PI) / 180}
                    {@const textX = 100 + 60 * Math.cos(textAngleRad)}
                    {@const textY = 100 + 60 * Math.sin(textAngleRad)}
                    
                    <path
                        d={pathData}
                        fill="hsl({i * (360 / items.length)}, 70%, 50%)"
                        stroke="white"
                        stroke-width="1"
                    />
                {/each}
            </svg>
            
            {#each items as item, i}
                {@const segmentAngle = 360 / items.length}
                {@const textAngle = i * segmentAngle + segmentAngle / 2 - 90}
                {@const textAngleRad = (textAngle * Math.PI) / 180}
                {@const textX = 150 + 60 * Math.cos(textAngleRad)}
                {@const textY = 150 + 60 * Math.sin(textAngleRad)}
                
                <div
                    class="slice-text"
                    style="left: {textX}px; top: {textY}px;"
                >
                    {item}
                </div>
            {/each}
        </div>

        <button
            on:click={spin}
            class="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={spinning}
        >
            {spinning ? "⏳ Memutar..." : "🎡 Putar Spinner"}
        </button>

        {#if winner}
            <div class="mt-4 text-xl font-bold text-green-600">
                🎉 Pemenangnya: {winner}!
            </div>
        {/if}
    {/if}
</div>
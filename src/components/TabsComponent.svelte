<script>
  import JadwalSholat from "./JadwalSholat.svelte";
  import Quotes from "./Quotes.svelte";
  import RandomFact from "./RandomFact.svelte";
  import Cat from "./Cat.svelte";
  import DoaHarian from "./DoaHarian.svelte";
  import Football from "./Football.svelte";
  import Surah from "./Surah.svelte";
  import Meme from "./Meme.svelte";
  import Spinner from "./Spinner.svelte";


  let activeTab = 'sholat';

  const tabs = [
    { 
      id: 'sholat', 
      label: 'Jadwal Sholat', 
      icon: '🕌'
    },
    { 
      id: 'quotes', 
      label: 'Quotes & Facts', 
      icon: '💭'
    },
    { 
      id: 'cat', 
      label: 'Cat', 
      icon: '🐱'
    },
    { 
      id: 'doa', 
      label: 'Doa Harian', 
      icon: '🤲'
    },
    { 
      id: 'football', 
      label: 'Football', 
      icon: '⚽'
    },
    { 
      id: 'al-quran', 
      label: 'Ayat Al-quran', 
      icon: '📖'
    },
    { 
      id: 'meme', 
      label: 'Meme', 
      icon: '😂'
    },
    { 
      id: 'spinner', 
      label: 'Spinner', 
      icon: '😂'
    }
  ];

  function setTab(tabId) {
    activeTab = tabId;
  }
</script>

<div class="p-3">
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <!-- Tab Headers -->
    <div class="flex overflow-x-auto border-b border-gray-200">
      {#each tabs as tab}
        <button
          on:click={() => setTab(tab.id)}
          class="flex-shrink-0 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap {activeTab === tab.id
            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}"
        >
          <span class="text-lg">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      {/each}
    </div>

    <!-- Tab Content -->
    <div class="p-4">
      {#if activeTab === 'sholat'}
        <div class="tab-content">
          <JadwalSholat />
        </div>
      {:else if activeTab === 'quotes'}
        <div class="tab-content">
          <div class="flex flex-col md:flex-row gap-3">
            <div class="flex-1">
              <Quotes />
            </div>
            <div class="flex-1">
              <RandomFact />
            </div>
          </div>
        </div>
      {:else if activeTab === 'cat'}
        <div class="tab-content">
          <Cat />
        </div>
      {:else if activeTab === 'doa'}
        <div class="tab-content">
          <DoaHarian />
        </div>
      {:else if activeTab === 'football'}
        <div class="tab-content">
          <Football />
        </div>
      {:else if activeTab === 'al-quran'}
        <div class="tab-content">
          <Surah />
        </div>
      {:else if activeTab === 'meme'}
        <div class="tab-content">
          <Meme />
        </div>
      {:else if activeTab === 'spinner'}
        <div class="tab-content">
          <Spinner />
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .tab-content {
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Scrollbar styling for tab headers */
  .overflow-x-auto::-webkit-scrollbar {
    height: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
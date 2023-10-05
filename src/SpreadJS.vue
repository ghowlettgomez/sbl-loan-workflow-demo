<template>
  <default-layout :actions="actions" :navigation="navigation" :loading="loading">
    <div class="relative">
      <div v-if="loading" class="loading">
        <p>Loading...</p>
      </div>
      <gc-spread-sheets-designer
        :class="toolbarClass"
        :styleInfo="styleInfo"
        :config="config"
        :spreadOptions="spreadOptions"
        @workbookInitialized="initSpread"
        @designerInitialized="designerInitialized">
      </gc-spread-sheets-designer>
    </div>
  </default-layout>
</template>

<script>
  import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
  import * as GC from "@grapecity/spread-sheets";
  import * as ExcelIO from "@grapecity/spread-excelio";
  import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
  import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
  import "@grapecity/spread-sheets-print";
  import "@grapecity/spread-sheets-shapes";
  import "@grapecity/spread-sheets-tablesheet";
  import "@grapecity/spread-sheets-designer-resources-en";
  import "@grapecity/spread-sheets-designer";
  import DefaultLayout from '@/layouts/DefaultLayout.vue';
  import ActionBar from '@/components/ActionBar.vue'

  const spreadJSKey = "E668737722333874#B1tQwtmT6tkVGF7Kzd5ZE5UUGpVUZh4Zyw4QXZmTShUZVNHU4MDSyBXdMdVMhF6NyMWWGNXb8hzMwZ5Z9JjQ4IzUH3kNWRjYVx6UoJjNUlnT9lWRuJ5Uk96d6h7RFVnUnhkN5wkexk7Z0dkMHJHc6UTTxU5axxmcNFVN7plQldEZlZjelhHSXRlTwhFcvNDUxllRqlTQjVnUvYnMMR4b7c7NBJ5QldnR09mQv54N4QHbaxmeyVnUXNnYMRFewd5KPhVdxUkMJFXRDVmTKxkMNRWcLR7NCN6ZwIlcFRTMvUjWBFVZCVzdwgWciVmM7Ejb4ZGNshXapdWSiojITJCLiIzNEFjMCRkI0ICSiwSN6IjM6QjNwETM0IicfJye35XX3JyVUNkWiojIDJCLiYTMuYHITpEIkFWZyB7UiojIOJyebpjIkJHUiwiIwQTNxIDMgIDMwEzMyAjMiojI4J7QiwiIxATMxMjMwIjI0ICc8VkIsISbvNmLw3GbuVHZyV6asF6dA3GZhdWZwFmI0ISYONkIsUWdyRnOiwmdFJCLiQzN8MzMzIjM7czM7gjN6IiOiQWSiwSfdtlOicGbmJCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnFGU8FFMqVWcSlHUnNWaVN5KW3mTyRjNw9mWpt4Yrg6S5c5cLNkMJhmdhBzdtNTQrEmZ6NWTvdTT8ElModmcWNnYZtEe6kEZPNHVEBHcVZETCRzdQRTNCR4SzNPZeF";
  GC.Spread.Sheets.LicenseKey = spreadJSKey;
  ExcelIO.LicenseKey = spreadJSKey;
  GC.Spread.Sheets.Designer.LicenseKey = "E728223497497961#B1yyvnSoJ7QExUYCFGVFRnaVFDTUtUVatUROVUN5F4NNFTTwUVM6k7SwolVLVkQmJnYyEmc8c6NyElSNlXNvEHUshXW6R6cRlTTIZTNwNzajZUVwIna4B7YtZ4Q6QndF56RlJzaDZnWltCMDl6UFJEeE3mUHNkWapne9BXZ9dUVTV5bUdzRrUHdycGSvITW7YVMONHZvoEc62kMqJndJljeaZFOjV6b5QWOjRzRsNjMsh7NPJlU4tib5Y4ZqlWW8Y4KmBja4FWbtdjT6EXd9pnZyw6NDBlSiNGOX9kc9x4cR5kcsZmbTB5YyhVUpZ6bTZmI0IyUiwiIyUDM8ITR4IjI0ICSiwCMxgzMxQjN5gTM0IicfJye&Qf35Vfi4EU9cjI0IyQiwiI6EjL6BibvRGZB5icl96ZpNXZE5yUKRWYlJHcTJiOi8kI1tlOiQmcQJCLiQDN4IjMwACMykDMzIDMyIiOiQncDJCLiAjMwEzMyAjMiojIwhXRiwiIt36YuA7bs9WdkJXZrxWY7B4bkF6ZlBXYiojIh94QiwSZ5JHd0ICb6VkIsISM6kzN9QzN9QzMyIDOycjI0ICZJJye0ICRiwiI34zZvYHVHtmVmB5LZl6NwR5cz96T8kFRRVkMyITRpZTOZ9UYtFUQ5FGb5BlQ6gUQwcnTUZFW4R4Tr56cL34cm5WUKJ4NuFEOPZEeLtSevoEU8RlTj96KDZ4YslFMpBlWWhFSol7vMC3"

  export default {
    name: "App",
    components: {
      DefaultLayout,
      ActionBar,
    },
    props: {
      toolbar: {
        type: Boolean,
        default: false
      }
    },
    data() {
    return {
      styleInfo: { height: "calc(100vh - 128px)", width: "100%" },
      config: GC.Spread.Sheets.Designer.DefaultConfig,
      loading: true,
      spreadOptions: {
        sheetCount: 2,
      },
      designer: null,
      spread: null,
      actions: [
        { text: 'Action', click: () => {} }
      ],
      navigation: [
        { text: 'Quotes', to: '/' },
        { text: 'Financials', to: '/' },
        { text: 'Documents', to: '/' }
      ]
    };
  },
    watch: {
      async '$route.params.demoType'(val) {
        if (!this.loading) {
          this.loading = true
          await this.fetchSpreadsheet(val)
        } 
      }
    },
    methods: {
      designerInitialized(value) {
        this.designer = value;
        this.spread = this.designer.getWorkbook();
        this.designer.setConfig(this.config);
      },
      changeExportFileName(e) {
        this.exportFileName = e.target.value;
      },
      loadExcel(excelFile) {
        const context = this
        let excelIo = new ExcelIO.IO();
        excelIo.open(
          excelFile,
          function (json) {
            context.spread.suspendPaint();
            context.spread.suspendEvent();
            context.spread.fromJSON(json, {
              doNotRecalculateAfterLoad: true,
              incrementalLoading: {
                loading: function (progress, args) {
                  progress = progress * 100;
                  console.log(progress, args.sheet.name());
                },
                loaded: function () {
                  context.loading = false
                  context.spread.resumePaint();
                  context.spread.resumeEvent();
                }
              }
            })
          },
          function (error) {
            context.loading = false
            console.log(error);
          }
        );
      },
      async fetchSpreadsheet(type) {
        const axiosResponse = await this.$axios.get(`/spreadsheets/sbl_${type}.xlsx`, {
            responseType: 'blob', // Ensure Axios fetches the data as a blob
            headers: {
                "Access-Control-Allow-Origin": "*", 
                "Cache-Control": "no-cache",
            }
        });

        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData = event.target.result;
            const formatBlob = new Blob(
                [fileData],
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
            );
            this.loadExcel(formatBlob)
        };
        
        reader.readAsArrayBuffer(axiosResponse.data);
      }
    },
    computed: {
      toolbarClass() {
        return this.toolbar ? '' : 'no-toolbar'
      }
    },
    async mounted() {
      this.loading = true
      this.spread = this.designer.getWorkbook();
      await this.fetchSpreadsheet(this.$route.params.demoType)
      document.querySelector('#null_tabStrip').addEventListener('click', function() {
        setTimeout(() => {
          document.querySelector('canvas#vp_vp').click()
        }, 100)
      })
    }
  };
</script>

<style lang="scss">
  .relative {
    position: relative;
    overflow: hidden;
  }

  .loading {
    background: #fff;
    height: calc(100% - 1.25rem);
    width: 100vw;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inputContainer {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
    padding: 6px 12px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  .options-container {
    width: 280px;
    padding: 12px;
    height: 100%;
    box-sizing: border-box;
    background: #fbfbfb;
    overflow: auto;
  }
  .no-toolbar {
    .gc-ribbon-bar {
      display: none;
    }
  }
</style>

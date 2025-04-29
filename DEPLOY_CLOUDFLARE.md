# Deploy no Cloudflare

Este documento descreve o processo de configuração e deploy do projeto no Cloudflare Workers utilizando OpenNext.

## Dependências Necessárias

Instalamos as seguintes dependências:

```bash
npm install @opennextjs/cloudflare wrangler --legacy-peer-deps
```

> **Nota**: Utilizamos `--legacy-peer-deps` devido a conflitos de dependências com o React v19.

## Arquivos de Configuração

### 1. wrangler.jsonc

Arquivo principal de configuração do Cloudflare Workers:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "databutton-com-br",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-03-01",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "assets": {
    "binding": "ASSETS",
    "directory": ".open-next/assets"
  },
  "observability": {
    "enabled": true
  }
}
```

### 2. open-next.config.ts

Configuração do OpenNext para Cloudflare:

```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Configurações adicionais podem ser adicionadas aqui
  // Por exemplo, para habilitar o cache R2:
  // incrementalCache: r2IncrementalCache,
});
```

### 3. cloudflare-env.d.ts

Definições de tipo para variáveis de ambiente do Cloudflare:

```typescript
interface CloudflareEnv {
  ASSETS: { fetch: typeof fetch };
  // Adicione outras variáveis de ambiente do Cloudflare conforme necessário
}
```

### 4. Scripts no package.json

Adicionamos os seguintes scripts no package.json:

```json
"scripts": {
  "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
  "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
  "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
}
```

## Processo de Build e Deploy

1. **Build do Projeto**:
   ```bash
   npm run build
   # ou
   npx opennextjs-cloudflare build
   ```

2. **Deploy para Cloudflare**:
   ```bash
   npm run deploy
   ```

   Isso constrói o projeto e faz o deploy para o Cloudflare Workers.

## URL do Projeto

Após o deploy bem-sucedido, o projeto está disponível em:
https://databutton-com-br.databutton.workers.dev

## Configurações Adicionais

Para configurar um domínio personalizado, acesse o painel de controle do Cloudflare e configure as regras de DNS para apontar para o seu Workers. 
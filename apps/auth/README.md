# Auth-service

Service for users auth.

### Build

```
pnpm run build auth
```

### Run

```
pnpm start auth
```

### Migrations

Create:
```
npx typeorm migration:create --config ./apps/auth/ormconfig.json --name <name>
```

Run:
```
pnpm run build auth
npx typeorm migration:run --config ./apps/auth/ormconfig.json -t=each
```

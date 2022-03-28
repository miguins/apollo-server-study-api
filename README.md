# Apollo Server Study Api

A simple project to study node and graphql concepts.

## Setup
- Install dependencies
```bash
yarn
```
> Note: if you use npm run: `npm install`
- Start Application
```bash
yarn dev
```
> Note: if you use npm run: `npm run dev`

## Application
You can access the application at http://localhost:4000/graphql

### Example query
```graphql
query GetProducts {
	products {
		id
		name
		price
	}
}
```

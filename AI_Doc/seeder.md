# Database Seeder Documentation

## Overview
This document maintains the active database seeder scripts, execution commands, and schemas present in the `StyleDecor_Server` project.

## How to Run Seeders

### 1. Import All Seed Data (Populate Database)
```bash
npm run seed
```

### 2. Destroy All Seed Data (Clear Database)
```bash
npm run seed:destroy
```

---

## Seed Files & Schemas

### Categories
- **Data Source**: `data/categoriesData.js`
- **Model Mapping**: `categoryCollection` (mapped in `models/collections.js` -> `categories` collection)

**Schema Structure**:
```json
{
  "name": "Category Name",
  "status": "active",
  "order": 1,
  "description": "Category Description",
  "subCategories": [
    {
      "id": "sub_xx",
      "name": "Subcategory Name",
      "slug": "subcategory-slug",
      "status": "active",
      "order": 1
    }
  ],
  "createdAt": "ISO Date",
  "updatedAt": "ISO Date"
}
```

**Rule:** Moving forward, whenever a new seeder file is created, updated, or deleted, this file MUST be updated accordingly by the AI Agent.

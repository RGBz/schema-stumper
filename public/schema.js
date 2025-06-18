var schema = {
  "name": "crayon_factory",
  "types": [
    {
      "name": "suppliers",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "contact_email",
          "type": "character varying"
        },
        {
          "name": "phone",
          "type": "character varying"
        },
        {
          "name": "address",
          "type": "text"
        },
        {
          "name": "country",
          "type": "character varying"
        },
        {
          "name": "is_active",
          "type": "boolean"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "raw_materials",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "type",
          "type": "character varying"
        },
        {
          "name": "supplier_id",
          "type": "integer"
        },
        {
          "name": "unit_price",
          "type": "numeric"
        },
        {
          "name": "stock_quantity",
          "type": "integer"
        },
        {
          "name": "minimum_stock",
          "type": "integer"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "colors",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "hex_code",
          "type": "character"
        },
        {
          "name": "rgb_red",
          "type": "integer"
        },
        {
          "name": "rgb_green",
          "type": "integer"
        },
        {
          "name": "rgb_blue",
          "type": "integer"
        },
        {
          "name": "is_primary",
          "type": "boolean"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "crayon_products",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "product_code",
          "type": "character varying"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "color_id",
          "type": "integer"
        },
        {
          "name": "size",
          "type": "character varying"
        },
        {
          "name": "price",
          "type": "numeric"
        },
        {
          "name": "production_cost",
          "type": "numeric"
        },
        {
          "name": "is_discontinued",
          "type": "boolean"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "production_batches",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "batch_number",
          "type": "character varying"
        },
        {
          "name": "product_id",
          "type": "integer"
        },
        {
          "name": "quantity_produced",
          "type": "integer"
        },
        {
          "name": "production_date",
          "type": "date"
        },
        {
          "name": "quality_grade",
          "type": "character"
        },
        {
          "name": "supervisor_name",
          "type": "character varying"
        },
        {
          "name": "notes",
          "type": "text"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "batch_material_usage",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "batch_id",
          "type": "integer"
        },
        {
          "name": "material_id",
          "type": "integer"
        },
        {
          "name": "quantity_used",
          "type": "numeric"
        },
        {
          "name": "cost",
          "type": "numeric"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "order_items",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "order_id",
          "type": "integer"
        },
        {
          "name": "product_id",
          "type": "integer"
        },
        {
          "name": "quantity",
          "type": "integer"
        },
        {
          "name": "unit_price",
          "type": "numeric"
        },
        {
          "name": "discount_amount",
          "type": "numeric"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "customers",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "email",
          "type": "character varying"
        },
        {
          "name": "phone",
          "type": "character varying"
        },
        {
          "name": "customer_type",
          "type": "character varying"
        },
        {
          "name": "credit_limit",
          "type": "numeric"
        },
        {
          "name": "address",
          "type": "text"
        },
        {
          "name": "city",
          "type": "character varying"
        },
        {
          "name": "state",
          "type": "character varying"
        },
        {
          "name": "zip_code",
          "type": "character varying"
        },
        {
          "name": "country",
          "type": "character varying"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "orders",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "order_number",
          "type": "character varying"
        },
        {
          "name": "customer_id",
          "type": "integer"
        },
        {
          "name": "order_date",
          "type": "date"
        },
        {
          "name": "ship_date",
          "type": "date"
        },
        {
          "name": "status",
          "type": "character varying"
        },
        {
          "name": "total_amount",
          "type": "numeric"
        },
        {
          "name": "discount_percent",
          "type": "numeric"
        },
        {
          "name": "shipping_cost",
          "type": "numeric"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "quality_tests",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "batch_id",
          "type": "integer"
        },
        {
          "name": "test_type",
          "type": "character varying"
        },
        {
          "name": "test_date",
          "type": "date"
        },
        {
          "name": "result",
          "type": "character varying"
        },
        {
          "name": "score",
          "type": "numeric"
        },
        {
          "name": "notes",
          "type": "text"
        },
        {
          "name": "tester_name",
          "type": "character varying"
        },
        {
          "name": "created_at",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    }
  ]
};
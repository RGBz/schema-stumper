var schema = {
  "name": "checkverse",
  "types": [
    {
      "name": "migrations",
      "fields": [
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "executed",
          "type": "date"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "users",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "email",
          "type": "character varying"
        },
        {
          "name": "password",
          "type": "character varying"
        },
        {
          "name": "username",
          "type": "character varying"
        },
        {
          "name": "phone",
          "type": "character varying"
        },
        {
          "name": "full_name",
          "type": "character varying"
        },
        {
          "name": "bio",
          "type": "character varying"
        },
        {
          "name": "image_id",
          "type": "uuid"
        },
        {
          "name": "terms_accepted",
          "type": "timestamp without time zone"
        },
        {
          "name": "roles",
          "type": "ARRAY"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "password_reset_requests",
      "fields": [
        {
          "name": "token",
          "type": "character varying"
        },
        {
          "name": "user_id",
          "type": "uuid"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "expires",
          "type": "timestamp without time zone"
        },
        {
          "name": "invalidated",
          "type": "timestamp without time zone"
        },
        {
          "name": "claimed",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "follows",
      "fields": [
        {
          "name": "follower_id",
          "type": "uuid"
        },
        {
          "name": "followee_id",
          "type": "uuid"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "blocks",
      "fields": [
        {
          "name": "blocker_id",
          "type": "uuid"
        },
        {
          "name": "blockee_id",
          "type": "uuid"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "posts",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "content_id",
          "type": "uuid"
        },
        {
          "name": "content_type",
          "type": "text"
        },
        {
          "name": "content",
          "type": "jsonb"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "notifications",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "user_id",
          "type": "uuid"
        },
        {
          "name": "content_id",
          "type": "uuid"
        },
        {
          "name": "content_type",
          "type": "text"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "dismissed",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "reports",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "content_id",
          "type": "text"
        },
        {
          "name": "content_type",
          "type": "text"
        },
        {
          "name": "message",
          "type": "text"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "comments",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "post_id",
          "type": "uuid"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "text",
          "type": "text"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "emotes",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "post_id",
          "type": "uuid"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "symbol",
          "type": "text"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "sessions",
      "fields": [
        {
          "name": "access_key",
          "type": "character varying"
        },
        {
          "name": "user_id",
          "type": "uuid"
        },
        {
          "name": "platform",
          "type": "character varying"
        },
        {
          "name": "client_version",
          "type": "integer"
        },
        {
          "name": "notification_registration_id",
          "type": "character varying"
        },
        {
          "name": "endpoint_arn",
          "type": "character varying"
        },
        {
          "name": "started",
          "type": "timestamp without time zone"
        },
        {
          "name": "ended",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "dimensions",
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
          "name": "format",
          "type": "USER-DEFINED"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "units",
      "fields": [
        {
          "name": "id",
          "type": "integer"
        },
        {
          "name": "dimension_id",
          "type": "integer"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "abbreviation",
          "type": "character varying"
        },
        {
          "name": "coefficient",
          "type": "double precision"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "actions",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "action_parents",
      "fields": [
        {
          "name": "action_id",
          "type": "uuid"
        },
        {
          "name": "parent_id",
          "type": "uuid"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "metrics",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "dimension_id",
          "type": "integer"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "metric_values",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "metric_id",
          "type": "uuid"
        },
        {
          "name": "value",
          "type": "text"
        },
        {
          "name": "unit_id",
          "type": "integer"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "action_metrics",
      "fields": [
        {
          "name": "action_id",
          "type": "uuid"
        },
        {
          "name": "metric_id",
          "type": "uuid"
        },
        {
          "name": "value_id",
          "type": "uuid"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "activities",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "user_id",
          "type": "uuid"
        },
        {
          "name": "media",
          "type": "jsonb"
        },
        {
          "name": "tz_offset",
          "type": "integer"
        },
        {
          "name": "performed",
          "type": "timestamp without time zone"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "activity_actions",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "activity_id",
          "type": "uuid"
        },
        {
          "name": "action_id",
          "type": "uuid"
        },
        {
          "name": "novel",
          "type": "boolean"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "activity_action_metrics",
      "fields": [
        {
          "name": "activity_action_id",
          "type": "uuid"
        },
        {
          "name": "metric_id",
          "type": "uuid"
        },
        {
          "name": "value_id",
          "type": "uuid"
        },
        {
          "name": "novel",
          "type": "boolean"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "challenge_sets",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "version",
          "type": "integer"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "image_id",
          "type": "uuid"
        },
        {
          "name": "color",
          "type": "integer"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "description",
          "type": "character varying"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        },
        {
          "name": "published",
          "type": "timestamp without time zone"
        },
        {
          "name": "deprecated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "challenge_subsets",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "version",
          "type": "integer"
        },
        {
          "name": "challenge_set_id",
          "type": "uuid"
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
          "name": "unlock_pattern",
          "type": "jsonb"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "challenges",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "version",
          "type": "integer"
        },
        {
          "name": "challenge_subset_id",
          "type": "uuid"
        },
        {
          "name": "author_id",
          "type": "uuid"
        },
        {
          "name": "name",
          "type": "character varying"
        },
        {
          "name": "description",
          "type": "character varying"
        },
        {
          "name": "pattern",
          "type": "jsonb"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        },
        {
          "name": "published",
          "type": "timestamp without time zone"
        },
        {
          "name": "deprecated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "challenge_set_logs",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "challenge_set_id",
          "type": "uuid"
        },
        {
          "name": "version",
          "type": "integer"
        },
        {
          "name": "user_id",
          "type": "uuid"
        },
        {
          "name": "progress",
          "type": "double precision"
        },
        {
          "name": "goal",
          "type": "double precision"
        },
        {
          "name": "next_deadline",
          "type": "timestamp without time zone"
        },
        {
          "name": "completed",
          "type": "timestamp without time zone"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        },
        {
          "name": "deleted",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "challenge_logs",
      "fields": [
        {
          "name": "id",
          "type": "uuid"
        },
        {
          "name": "challenge_set_log_id",
          "type": "uuid"
        },
        {
          "name": "challenge_id",
          "type": "uuid"
        },
        {
          "name": "version",
          "type": "integer"
        },
        {
          "name": "user_id",
          "type": "uuid"
        },
        {
          "name": "progress",
          "type": "double precision"
        },
        {
          "name": "goal",
          "type": "double precision"
        },
        {
          "name": "next_deadline",
          "type": "timestamp without time zone"
        },
        {
          "name": "completed",
          "type": "timestamp without time zone"
        },
        {
          "name": "created",
          "type": "timestamp without time zone"
        },
        {
          "name": "updated",
          "type": "timestamp without time zone"
        }
      ],
      "bestScore": null,
      "bestTime": null
    },
    {
      "name": "challenge_log_activities",
      "fields": [
        {
          "name": "challenge_log_id",
          "type": "uuid"
        },
        {
          "name": "activity_id",
          "type": "uuid"
        }
      ],
      "bestScore": null,
      "bestTime": null
    }
  ]
};
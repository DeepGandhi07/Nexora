import clerkNext from "@clerk/eslint-plugin/next"

export default [
  {
    plugins: { "@clerk/next": clerkNext },
    rules: {
      "@clerk/next/require-auth-protection": [
        "error",
        {
          protected: ["**"],
          public: ["apps/web/app/sign-in/**", "apps/web/app/sign-up/**"],
        },
      ],
    },
  },
]

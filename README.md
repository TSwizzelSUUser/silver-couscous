 #22c55e
 
Key Features:

- Song upload
- Stripe integration
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Stripe recurring payment integration
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment
- Cancelling Stripe subscriptions

### Prerequisites

**Node version 18

### Cloning the repository
 
### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Add SQL Tables
Use `database.sql` file, create songs and liked_songs table (there is a video tutorial) https://github.com/AntonioErdeljac/next13-spotify.git

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
---------------------------------------------------------

supabase.com/docs/guides/api/rest/generating-types

npm i supabase@">=1.8.1" --save-dev

npx supabase login

#access token sbp_94c8cc5aea07c1df9021524c14c9039090c85c13

PROJECT_ID = Reference ID in settings/general
# ID = borwyeuzmkhadjngfbew
> npx supabase gen types typescript --project-id borwyeuzmkhadjngfbew --schema public > types_db.ts

# > npm install @supabase/auth-helpers-nextjs

# > npm install @supabase/auth-helpers-react

----------------------------------------------------

# > npm install stripe

create interfaces with type.ts // note much better subscription setup than auraco but it works so if it aint broke dont break it.

------------------------------------------------
package used to create modals is radix-ui.com/docs/primitives/components/dialog

# npm install @radix-ui/react-dialog

---------------------------------------------------------

# npm install zustand

NOTE: mac > npm i zustand

-------------------------------------------------------

# npm install @supabase/auth-ui-react

# npm install @supabase/auth-ui-shared

----------------------------------------------------
 
Github.com/settings/applications/new
Register a new OAuth Application

Application Name:

Exofy.app

Homepage URL: http://localhost:3000
note: Change to .app url before prod.

Authorization callback URL: http://localhost:3000/

Client ID
aa1de3fdfd794766e7a0

Client Secrets: 
820aa790d76198957b881090f45f2ab7ecb65ea6
https://supabase.com/dashboard/project/borwyeuzmkhadjngfbew/auth/providers
Nav to supabase.com Auth Settings
enable github

Redirect URL: https://borwyeuzmkhadjngfbew.supabase.co/auth/v1/callback
 

LinkedIn, Notion, Twitch same process as above

-----------------------------------------------------------------------------
Note ur on windows and node 18.x 
# npm install react-hot-toast
-----------------------------------------------------------------------------
# npm install react-hook-form

# npm install uniqid

# npm i -D @types/uniqid

-----------------------------------------------------------------------------

# npm install query-string
 mac? npm i query-string

-----------------------------------------------------------------------------

# npm install @radix-ui/react-slider

-----------------------------------------------------------------------------

# npm install use-sound

-----------------------------------------------------------------------------

# npm install react-spinners

-----------------------------------------------------------------------------

# npm install @stripe/stripe-js

# npm install @supabase/supabase-js
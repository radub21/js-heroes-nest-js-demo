## Intro

You know that nice feeling of being home? Me neither, but Nest JS is the second best thing you could get. Especially when trying to develop a scalable backend service with TypeScript. Once you get to understand its peculiarities you will start to wonder why you haven't thought about this before. So if you've ever experienced the pain of making choices while running an express app, I'm pretty sure you're going to love this! So buckle up, because our next meeting is all about live coding and expressing opinions with NestJS in an un-opinionated world!

## About Radu

**Radu** is a Software Engineer drawn by Engineering like bugs are attracted by Vanilla JS. He believes that "Ain't no mountain high enough" which often leads him into programming rabbit holes governed by the only true god - FOSS. When he's not brambling about his favorite react component library he spends time as a wannabe DevOps. He told us that in his free time he enjoys cooking and riding his pink bike. We still don't know what's wrong with him, but give him the chance to speak and he'll never stop.

If you see him wandering around with a confused expression on his face, let the guys at RebelDot know they are missing one pacient from their ward.

# Presentation

## Intro

#### Angular vs every other FE "framework"

Talking about frontend, seems like a semi-weird way of starting a backend related presentation, but bear with me as it will make sense in a minute. Now, If you've ever tried building a web app with Angular - spoiler alert, beginners might find it cumbersome to use - you will be surprised by the amount of so called "batteries" included. From the Dependency Injection pattern, to Routing & Navigation, Form Handling a built-in HTTP Client and more, you will find almost everything you need to build FE web apps with Angular.

But that's just boring, rigid and most of the time unsuitable in a world where PO's, BA's and other hypothetical roles in a semi-fictional Organizational Chart exist. And that is why I love and cherish Vue, Svelte or React. I myself am a React fan-boy because it took me countless hours of debugging to wrap my head around the gotchas of react, especially when working with reactive values and foot guns like `useMemo` and `useCallback`.

#### Going back... end?

But today we're not here to discuss about the supremacy of React in the FE world. Because today, we as FE developers will play the reverse uno card to go after the jobs of Java developers! If you ever tried Nest, you'd know what I'm talking about.

Ok, enough spoilers. Back to the boring part of tonight - the introduction.

Building the perfect architecture for a Web App, requires quite a lot of freedom. The reason? Well, there are many flavors of apps in terms of layout and routing. One can work on a Dashboard, another on a Data Viz app, some might create content driven Apps. Do you know what these developers have in common? They all enjoy the freedom of React. But when moving to the backend world, having that much freedom can prove to be tricky. Back in the days, I would build web apps using Firebase as PaaS. And that's because Firebase provided lots of batteries that would almost entirely eliminate backend work. Therefore, I was able to build really cool stuff using Firebase. However, having a service of your own can prove to be much more effective, both from a cost and your personal growth perspective.

This is not me saying that beginners should not look into a PaaS for their pet projects. But I am an advocate of understanding the tools you work with. In my case, it was exactly the frustration of not understanding how Firebase works that made me start experimenting with Express.

#### Traffic Jam on the Express Road

I find the traffic analogy to work great in the development world, especially when you build a backend service from scratch. So I will try to emphasize when Express is not enough, using a simple transportation mental model. First of all, it is important to understand that Express is just an extremely thin layer on top of Node JS with it's most recognizable features being Routing, Middleware and Error Handling. While these functionalities could be just enough for a pet project or for a really simple CRUD API, building a scalable production ready backend service is more than just throwing together a bunch of endpoints sprinkled with middleware.

Everything complicates when you must organize the Business Logic in a way that makes sense for you, the stakeholders, the consumers of the service and maybe some new joiners to the development team? In this case, you will have to take some decisions, come up with some patterns, agree them with your team and then pay close attention while code reviewing to make sure everything is properly enforced. Because Express doesn't have any guardrails - just like in bare bone React, almost everything is permitted!

From a transportation perspective, Express JS is launching you on what seems like a straight road. But as you go down the road, you will often find yourself at road junctions where you must take the decision that best fits your needs. Which way should you go? And by way I'm talking about all those conventions to organize the codebase, the proper patterns to do so, the correct libraries, the right API contracts and so on. This would be fine, as long as the road you're cruising in has no traffic. Like when you are a solo developer. But let's now add some pressure from the stakeholder, an aggressive development pace and just a couple of stubborn new comers who are constantly arguing about the best way to organize the codebase. Now you will soon find yourself trying to navigate an intertwined network of roads at rush-hour when the traffic is just crazy! For me, that's how frequently running the decision-making process feels like - crazy.

#### Nest JS train has now arrived in station

In my opinion, the traffic problem is unsolvable when each individual is driving a ton and a half of metal to get from point A to point B. But I am almost certain that the right answer to efficient transportation of humans is public transportation. Americans might no agree with me, but that's another topic for another day.

So, we said earlier that "traffic jams" for development teams are caused by frequently running a decision-making process. When there are too many options from which you can choose, there are high chances that you will get fatigued from them.

And this is where Nest comes into play, because out of the box, it comes with well defined "train carts" that will constrain you to play by some predefined rules. And it does that through various features like:

- Modules using the Dependency Injection pattern, so dependencies Can and Must be injected whenever you need them
- Providers that are used to mark external dependencies Injected via constructors
- Controllers for each module, so endpoints can be encapsulated in business verticals and I just can not stress how important this is for the client consuming your service!
- A neat cli that allows you to quickly scaffold new Modules, just like in Angular
- A well thought documentation so newcomers can get up to speed without having to go through a lengthy onboarding process.
- You still get all the juice from Express as Nest simply building on top of it. Or maybe you fancy trying Fastify - which is also supported.
- Pipe, Guard, Interceptor, and Decorator patterns which will prove extremely handy for authentication, authorization, data validation, error handling, monitoring and much more
- Exception Filters for a uniformed error handling experience.
- Built in support for Microservices, WebSockets and GraphQL - if anybody is still using that
- An Open API plugin that spins up documentation for all your routes with almost 0 effort
- Various Recipes for the most mundane integrations to excentric ones like Necord for creating Discord Bots
- and much more, but at the end of this, just check the docs: https://docs.nestjs.com/

In simpler words, as explained in the Docs:

> Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.

Anyway, enough talking, let's get our hands dirty and try implementing a simple HTTP service to showcase some of Nest's functionalities. In whatever time we have left, I will try to showcase a couple of Nest's most used functionalities by creating an HTTP Rest API from scratch!

A few weeks ago I watched a documentary on George Carlin's life so I was thinking it would be nice to have a Comedian Library with their most important jokes and the shows they used those jokes. While I could have searched the internet for an app that would fit my needs, in the end, I am a Software Engineer - what could be so hard to make it by myself?

### Live coding steps

A minimal setup is required to start a Nest JS project. We will mostly follow the instructions found in the [First Steps](https://docs.nestjs.com/first-steps) section from the official documentation.

- make sure node js version>=20 is installed - `node -v`
- install the nest js cli - `npm i -g @nestjs/cli`
- use the cli, to initialize the project - `nest new . --strict` - strict parameter is used to start the project with the following TS compiler flags enabled: `strictNullChecks`, `noImplicitAny`, `strictBindCallApply`, `forceConsistentCasingInFileNames`, `noFallthroughCasesInSwitch`
- let's check what we've got in the codebase
- explain how the dependency injection works with the App Module and the AppService used in AppController
- let's test the dev environment - `npm run start:dev`
- encapsulating business logic in modules/verticals - it is crucial to ensure that various parts of the business logic
- create a standup-comedian library API that has CRUD on: Comedians, Jokes and Shows
- setup a DB connection using Prisma
  - initiate Prisma `npx prisma init`
  - setup the environment variable for `DATABASE_URL`
  - setup a ConfigModule so Nest can catch the environment variables
    - run `npm i --save @nestjs/config`
    - ConfigModule is a dynamic module that has a `forRoot()` static method which we can call to tell the Config Module to look for the `.env` file at the root of the project.
    - We'll get the opportunity of defining a Dynamic Module later so let's leave this as it is.
  - setup the models, show attribute functions and explain how to map relations between models
  - initial setup of the database
    - create and apply a migration so the tables corresponding to each of our models are created - `npx prisma migrate dev`
  - create a Nest Module for handling Prisma
    - `npm install @prisma/client`
    - create a prisma module via the cli `nest g module prisma`
    - extend the PrismaClient class
    - use Nest lifecycle `onModuleInit` method to create the connection to the database when PrismaModule is initialized
    - Explain Nest's lifecyle
      - After the bootstrap function is called, several things happen
      - For each module, we await the `onModuleInit()` method - called once the host module's dependencies have been resolved
      - For each module, await for `onApplicationBootstrap()` - called once all modules have been initialized, but before listening for connections
      - When a termination signal has been received
      - For each module, the `onModuleDestroy()` method is called
      - For each module, the `beforeApplicationShutdown()` method is called, after `onModuleDestroy()` handlers have been completed - all existing connections are closed
      - For each module `onApplicationShutdown()` called after all connections close
      - Disclaimer without `app.enableShutdownHooks()` promises will not be awaited in the termination events.
- create a module for Comedian
  - create a module, controller and service via the cli
  - CRUD for Comedian
    - Create
      - Post endpoint
      - introduce the DTO concept - we use classes because classes in opposition to types, are not erased at runtime, and they also accept decorators which will prove handy later. - dto's should be created inside the module and should be module specific - so we will place them inside a `/dto` folder - install `@nestjs/mapped-types` to reuse DTO's - use the OmitType - Because birthDate must be a date and we want users to be able to input ISO 8601 standard for encoding dates, we need a `@Transform` decorator that can ensure we have a valid date - introduce the ValidationPipe concept - `app.useGlobalPipes(new ValidationPipe())` - additional libraries for ValidationPipe `npm install class-validator class-transformer`
      - Easy testing with Swagger interface - One way you can test your endpoints, is by using Postman or other client for api testing. - install swagger plugin `npm install --save @nestjs/swagger` - in the main.ts, create a `generateSwagger` function that leverages the DocumentBuilder class - set a title, description, version and call the `.build()` method - create a documentFactory callback with `SwaggerModule.createDocument()` - then call `SwaggerModule.setup(path, app, documentFactory)` - in the nest-cli.json, add `"plugins": ["@nestjs/swagger"]` under the `compilerOptions` - this will automatically take the dto's defined and used in the controllers and add them to your swagger interface - with Swagger plugin in place, you will want to improve the controllers that you have - note: MappedTypes from `@nestjs/mapped-types` won't be caught by Swagger plugin, so you will have to use it from `@nestjs/swagger` instead
    - Read - Get resource by id - Get all resources
    - Patch - use a path parameter to identify the user to update - create an `UpdateComedianDto` class, then leverage from the mapped types `PartialType(CreateComedianDto)`
    - Delete - use a path parameter to identify the user to delete
  - create a module for jokes - I have shown you how you can use the cli to generate the files one by one, but what if I told you there is a cli command to generate a CRUD? - `nest g resource jokes` an interactive cli should start asking us what kind of resource we want to create? - we will choose `REST API` as a transport layer - and of course we want to obtain the CRUD endpoints! - now let's see what was generated for us! - a module, injected into app module - a controller, with 5 endpoints for all CRUD operations - a service, with 5 methods already associated with the 5 endpoints - two `dto` files - one for creating a joke and the other one for updating it - an entity file - which in our case I will just delete it, as we already have described the entity using Prisma - the cli did most of the job for us, but here's where my opinion comes in. - you already saw there is no `dto` used to describe the responses of `GET` endpoints from the `jokes.controller` file - which is not necessarily wrong, but without that, the Swagger docs won't be properly documented. - my next step is to create it - now my TS server screams the service methods are not returning the correct type, let's temporarily solve that - next, I'll make sure that `create-joke.dto` is based on `joke.dto` - the last step is to integrate `PrismaService` so we can actually embed the bussines logic inside `jokes.service` - use the DI pattern to bring our `PrismaService` singleton - let's make sure that `PrismaService` is properly referenced in our newly created module - then we'll create the logic to create, read, update and delete - you will notice that inside the service, I won't use `dto's` in type definition. This is again a preference of mine as I believe that the service should not be aware of the `dto's` as long as you use an `entity` model, like Prisma does for us. - let's test the API - what we could optionally do now, is to improve the DTO's with Swagger decorators so users can have better examples - while that's a good practice, I won't do it now, maybe at the end if we have time.
  - rinse and repeat for the `ShowPerformance`
  - we now have three verticals properly separated into modules - nice and tidy
  - but what else can you do with Nest?
    - remember that I said about ConfigModule that it is a dynamic module? well, why would we want dynamic modules? To answer this question, let us look at the definition of one, then at its injection strategy. We have declared modules, by simply adding a Module decorator then stated its dependencies. We then took the module and in a similar manner, added it to `app.module` configuration. This is telling us that the module is static, with no possibility of configuring it at runtime.
    - Except `ConfigModule` which has attached to it a `forRoot` static method. In other words, the ConfigModule has in its implementation a `forRoot` static method that does something for us - by default reading values from a `.env` file.
    - So if we would ever need what we call a `DynamicModule` for one of our static modules, we would have to add to it a static method, that allows it to consume a custom configuration. That static module should return an object that has the interface of the `DynamicModule`. In other words, the dynamic module API simply returns a module, but rather than fix the properties in the `@Module` decorator, we specify them programmatically.
    - Let's build one for our Comedian Library. Let's presume that our service requires some sort of data storage attached to it. You know, an S3 from AWS or Azure Storage. To keep things simple, let's say that in a local development environment, we want to use a mocked service, while in a production environment, the actual service.
    - before fiddling with the injection mechanism, let's scaffold our storage logic
      - `nest g module storage`
      - inside the storage module, let's create two services: `storage-local.service.ts` and `storage.production.ts` with a `readFile` and `writeFile` method
    - the question now is, how can we decide which one of the services to use?
    - let's leverage a `NODE_ENV` environment variable while properly typing it in an `environment.d.ts` typing file
    - let's now try to access these newly created services from `ComedianService`
      - to make that happen, we could inject both services into our module, then leverage the ConfigService to decide which one of those to use through a `storageService` private method.
      - now we can test it with the two variables to see if it works as expected
      - and it does, but introducing it to all of our modules, means that we will have to configure it for each vertical.
      - this is too dirty, but we can leverage dynamic modules, to register the StorageModule with the appropriate service!
      - Let's refactor this approach
        - first of all, let's declare an abstract class StorageService that both of the previous services will implement
        - in `StorageModule` class, let's define a `forRoot` static method, then move the module definition from the decorator, into the return of the newly created method
        - now, to inject the proper service, we will declare a custom provider as an object.
        - for that, first we need a `provider token` - `STORAGE_SERVICE` - which is essentially a string variable that we will use to reference the service where needed
        - then, we will leverage a factory pattern to create the service based on the current environment.
        - through the `inject` property, we will inject `configService`
        - through the `useFactory` property, we will make use of the `configService` which will be available as parameter in the callback
        - we extract a `nodeEnv` value and based on it, we return the proper service
        - if there is no `NODE_ENV` set, we throw an error to make sure the app doesn't start without this critical environment variable
        - we end by making the `StorageModule` global through the usage of `@Global` decorator - because we want the storage available to all modules
        - now if we want to use it, we'll have to inject it in the `AppModule` and register it with the `forRoot` method.
        - and then, in `ComedianService`, we can just consume the `StorageService` with the DI pattern established by Nest, meaning that the `StorageService` will be available in the constructor by appending the `@Inject(STORAGE_SERVICE)` decorator to the constructor variable.

While there are other features worth demonstrating, what you saw now is perfectly enough to start experimenting with Nest.

Yeah, it has a learning curve so you'll have to learn quite a few things - especially if you've never heard of Design Patterns. Because you wouldn't want Uncle Bob to be mad at you, just check out some of the most used patterns to get the gist of them and you should be good.

Questions?

## Resources

- Code Aesthetic's take on DI - https://www.youtube.com/watch?v=J1f5b4vcxCQ
- Official Nest JS Documentation - https://docs.nestjs.com/
- NestJS in 100 seconds from Fireship - https://www.youtube.com/watch?v=0M8AYU_hPas

### Jokes

"Never underestimate the power of stupid people in large groups." - George Carlin
"The Planet is fine... The people are fucked!"

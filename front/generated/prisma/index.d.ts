
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model sqlx_migrations
 * 
 */
export type sqlx_migrations = $Result.DefaultSelection<Prisma.$sqlx_migrationsPayload>
/**
 * Model reports
 * 
 */
export type reports = $Result.DefaultSelection<Prisma.$reportsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sqlx_migrations
 * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sqlx_migrations
   * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sqlx_migrations`: Exposes CRUD operations for the **sqlx_migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sqlx_migrations
    * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
    * ```
    */
  get sqlx_migrations(): Prisma.sqlx_migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reports`: Exposes CRUD operations for the **reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.reports.findMany()
    * ```
    */
  get reports(): Prisma.reportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    sqlx_migrations: 'sqlx_migrations',
    reports: 'reports',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sqlx_migrations" | "reports" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      sqlx_migrations: {
        payload: Prisma.$sqlx_migrationsPayload<ExtArgs>
        fields: Prisma.sqlx_migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sqlx_migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sqlx_migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          findFirst: {
            args: Prisma.sqlx_migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sqlx_migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          findMany: {
            args: Prisma.sqlx_migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>[]
          }
          create: {
            args: Prisma.sqlx_migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          createMany: {
            args: Prisma.sqlx_migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sqlx_migrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>[]
          }
          delete: {
            args: Prisma.sqlx_migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          update: {
            args: Prisma.sqlx_migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          deleteMany: {
            args: Prisma.sqlx_migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sqlx_migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sqlx_migrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>[]
          }
          upsert: {
            args: Prisma.sqlx_migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          aggregate: {
            args: Prisma.Sqlx_migrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSqlx_migrations>
          }
          groupBy: {
            args: Prisma.sqlx_migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sqlx_migrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sqlx_migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<Sqlx_migrationsCountAggregateOutputType> | number
          }
        }
      }
      reports: {
        payload: Prisma.$reportsPayload<ExtArgs>
        fields: Prisma.reportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findFirst: {
            args: Prisma.reportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findMany: {
            args: Prisma.reportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          create: {
            args: Prisma.reportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          createMany: {
            args: Prisma.reportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          delete: {
            args: Prisma.reportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          update: {
            args: Prisma.reportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          deleteMany: {
            args: Prisma.reportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          upsert: {
            args: Prisma.reportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.reportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sqlx_migrations?: sqlx_migrationsOmit
    reports?: reportsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    reports: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | UsersCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model sqlx_migrations
   */

  export type AggregateSqlx_migrations = {
    _count: Sqlx_migrationsCountAggregateOutputType | null
    _avg: Sqlx_migrationsAvgAggregateOutputType | null
    _sum: Sqlx_migrationsSumAggregateOutputType | null
    _min: Sqlx_migrationsMinAggregateOutputType | null
    _max: Sqlx_migrationsMaxAggregateOutputType | null
  }

  export type Sqlx_migrationsAvgAggregateOutputType = {
    version: number | null
    execution_time: number | null
  }

  export type Sqlx_migrationsSumAggregateOutputType = {
    version: bigint | null
    execution_time: bigint | null
  }

  export type Sqlx_migrationsMinAggregateOutputType = {
    version: bigint | null
    description: string | null
    installed_on: Date | null
    success: boolean | null
    checksum: Uint8Array | null
    execution_time: bigint | null
  }

  export type Sqlx_migrationsMaxAggregateOutputType = {
    version: bigint | null
    description: string | null
    installed_on: Date | null
    success: boolean | null
    checksum: Uint8Array | null
    execution_time: bigint | null
  }

  export type Sqlx_migrationsCountAggregateOutputType = {
    version: number
    description: number
    installed_on: number
    success: number
    checksum: number
    execution_time: number
    _all: number
  }


  export type Sqlx_migrationsAvgAggregateInputType = {
    version?: true
    execution_time?: true
  }

  export type Sqlx_migrationsSumAggregateInputType = {
    version?: true
    execution_time?: true
  }

  export type Sqlx_migrationsMinAggregateInputType = {
    version?: true
    description?: true
    installed_on?: true
    success?: true
    checksum?: true
    execution_time?: true
  }

  export type Sqlx_migrationsMaxAggregateInputType = {
    version?: true
    description?: true
    installed_on?: true
    success?: true
    checksum?: true
    execution_time?: true
  }

  export type Sqlx_migrationsCountAggregateInputType = {
    version?: true
    description?: true
    installed_on?: true
    success?: true
    checksum?: true
    execution_time?: true
    _all?: true
  }

  export type Sqlx_migrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sqlx_migrations to aggregate.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sqlx_migrations
    **/
    _count?: true | Sqlx_migrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sqlx_migrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sqlx_migrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sqlx_migrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sqlx_migrationsMaxAggregateInputType
  }

  export type GetSqlx_migrationsAggregateType<T extends Sqlx_migrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSqlx_migrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSqlx_migrations[P]>
      : GetScalarType<T[P], AggregateSqlx_migrations[P]>
  }




  export type sqlx_migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sqlx_migrationsWhereInput
    orderBy?: sqlx_migrationsOrderByWithAggregationInput | sqlx_migrationsOrderByWithAggregationInput[]
    by: Sqlx_migrationsScalarFieldEnum[] | Sqlx_migrationsScalarFieldEnum
    having?: sqlx_migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sqlx_migrationsCountAggregateInputType | true
    _avg?: Sqlx_migrationsAvgAggregateInputType
    _sum?: Sqlx_migrationsSumAggregateInputType
    _min?: Sqlx_migrationsMinAggregateInputType
    _max?: Sqlx_migrationsMaxAggregateInputType
  }

  export type Sqlx_migrationsGroupByOutputType = {
    version: bigint
    description: string
    installed_on: Date
    success: boolean
    checksum: Uint8Array
    execution_time: bigint
    _count: Sqlx_migrationsCountAggregateOutputType | null
    _avg: Sqlx_migrationsAvgAggregateOutputType | null
    _sum: Sqlx_migrationsSumAggregateOutputType | null
    _min: Sqlx_migrationsMinAggregateOutputType | null
    _max: Sqlx_migrationsMaxAggregateOutputType | null
  }

  type GetSqlx_migrationsGroupByPayload<T extends sqlx_migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sqlx_migrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sqlx_migrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sqlx_migrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Sqlx_migrationsGroupByOutputType[P]>
        }
      >
    >


  export type sqlx_migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }, ExtArgs["result"]["sqlx_migrations"]>

  export type sqlx_migrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }, ExtArgs["result"]["sqlx_migrations"]>

  export type sqlx_migrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }, ExtArgs["result"]["sqlx_migrations"]>

  export type sqlx_migrationsSelectScalar = {
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }

  export type sqlx_migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"version" | "description" | "installed_on" | "success" | "checksum" | "execution_time", ExtArgs["result"]["sqlx_migrations"]>

  export type $sqlx_migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sqlx_migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      version: bigint
      description: string
      installed_on: Date
      success: boolean
      checksum: Uint8Array
      execution_time: bigint
    }, ExtArgs["result"]["sqlx_migrations"]>
    composites: {}
  }

  type sqlx_migrationsGetPayload<S extends boolean | null | undefined | sqlx_migrationsDefaultArgs> = $Result.GetResult<Prisma.$sqlx_migrationsPayload, S>

  type sqlx_migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sqlx_migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sqlx_migrationsCountAggregateInputType | true
    }

  export interface sqlx_migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sqlx_migrations'], meta: { name: 'sqlx_migrations' } }
    /**
     * Find zero or one Sqlx_migrations that matches the filter.
     * @param {sqlx_migrationsFindUniqueArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sqlx_migrationsFindUniqueArgs>(args: SelectSubset<T, sqlx_migrationsFindUniqueArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sqlx_migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sqlx_migrationsFindUniqueOrThrowArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sqlx_migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, sqlx_migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sqlx_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsFindFirstArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sqlx_migrationsFindFirstArgs>(args?: SelectSubset<T, sqlx_migrationsFindFirstArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sqlx_migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsFindFirstOrThrowArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sqlx_migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, sqlx_migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sqlx_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
     * 
     * // Get first 10 Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findMany({ take: 10 })
     * 
     * // Only select the `version`
     * const sqlx_migrationsWithVersionOnly = await prisma.sqlx_migrations.findMany({ select: { version: true } })
     * 
     */
    findMany<T extends sqlx_migrationsFindManyArgs>(args?: SelectSubset<T, sqlx_migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sqlx_migrations.
     * @param {sqlx_migrationsCreateArgs} args - Arguments to create a Sqlx_migrations.
     * @example
     * // Create one Sqlx_migrations
     * const Sqlx_migrations = await prisma.sqlx_migrations.create({
     *   data: {
     *     // ... data to create a Sqlx_migrations
     *   }
     * })
     * 
     */
    create<T extends sqlx_migrationsCreateArgs>(args: SelectSubset<T, sqlx_migrationsCreateArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sqlx_migrations.
     * @param {sqlx_migrationsCreateManyArgs} args - Arguments to create many Sqlx_migrations.
     * @example
     * // Create many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sqlx_migrationsCreateManyArgs>(args?: SelectSubset<T, sqlx_migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sqlx_migrations and returns the data saved in the database.
     * @param {sqlx_migrationsCreateManyAndReturnArgs} args - Arguments to create many Sqlx_migrations.
     * @example
     * // Create many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sqlx_migrations and only return the `version`
     * const sqlx_migrationsWithVersionOnly = await prisma.sqlx_migrations.createManyAndReturn({
     *   select: { version: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sqlx_migrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, sqlx_migrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sqlx_migrations.
     * @param {sqlx_migrationsDeleteArgs} args - Arguments to delete one Sqlx_migrations.
     * @example
     * // Delete one Sqlx_migrations
     * const Sqlx_migrations = await prisma.sqlx_migrations.delete({
     *   where: {
     *     // ... filter to delete one Sqlx_migrations
     *   }
     * })
     * 
     */
    delete<T extends sqlx_migrationsDeleteArgs>(args: SelectSubset<T, sqlx_migrationsDeleteArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sqlx_migrations.
     * @param {sqlx_migrationsUpdateArgs} args - Arguments to update one Sqlx_migrations.
     * @example
     * // Update one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sqlx_migrationsUpdateArgs>(args: SelectSubset<T, sqlx_migrationsUpdateArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sqlx_migrations.
     * @param {sqlx_migrationsDeleteManyArgs} args - Arguments to filter Sqlx_migrations to delete.
     * @example
     * // Delete a few Sqlx_migrations
     * const { count } = await prisma.sqlx_migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sqlx_migrationsDeleteManyArgs>(args?: SelectSubset<T, sqlx_migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sqlx_migrationsUpdateManyArgs>(args: SelectSubset<T, sqlx_migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sqlx_migrations and returns the data updated in the database.
     * @param {sqlx_migrationsUpdateManyAndReturnArgs} args - Arguments to update many Sqlx_migrations.
     * @example
     * // Update many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sqlx_migrations and only return the `version`
     * const sqlx_migrationsWithVersionOnly = await prisma.sqlx_migrations.updateManyAndReturn({
     *   select: { version: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sqlx_migrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, sqlx_migrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sqlx_migrations.
     * @param {sqlx_migrationsUpsertArgs} args - Arguments to update or create a Sqlx_migrations.
     * @example
     * // Update or create a Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.upsert({
     *   create: {
     *     // ... data to create a Sqlx_migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sqlx_migrations we want to update
     *   }
     * })
     */
    upsert<T extends sqlx_migrationsUpsertArgs>(args: SelectSubset<T, sqlx_migrationsUpsertArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsCountArgs} args - Arguments to filter Sqlx_migrations to count.
     * @example
     * // Count the number of Sqlx_migrations
     * const count = await prisma.sqlx_migrations.count({
     *   where: {
     *     // ... the filter for the Sqlx_migrations we want to count
     *   }
     * })
    **/
    count<T extends sqlx_migrationsCountArgs>(
      args?: Subset<T, sqlx_migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sqlx_migrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sqlx_migrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sqlx_migrationsAggregateArgs>(args: Subset<T, Sqlx_migrationsAggregateArgs>): Prisma.PrismaPromise<GetSqlx_migrationsAggregateType<T>>

    /**
     * Group by Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sqlx_migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sqlx_migrationsGroupByArgs['orderBy'] }
        : { orderBy?: sqlx_migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sqlx_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSqlx_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sqlx_migrations model
   */
  readonly fields: sqlx_migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sqlx_migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sqlx_migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sqlx_migrations model
   */
  interface sqlx_migrationsFieldRefs {
    readonly version: FieldRef<"sqlx_migrations", 'BigInt'>
    readonly description: FieldRef<"sqlx_migrations", 'String'>
    readonly installed_on: FieldRef<"sqlx_migrations", 'DateTime'>
    readonly success: FieldRef<"sqlx_migrations", 'Boolean'>
    readonly checksum: FieldRef<"sqlx_migrations", 'Bytes'>
    readonly execution_time: FieldRef<"sqlx_migrations", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * sqlx_migrations findUnique
   */
  export type sqlx_migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations findUniqueOrThrow
   */
  export type sqlx_migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations findFirst
   */
  export type sqlx_migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sqlx_migrations.
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sqlx_migrations.
     */
    distinct?: Sqlx_migrationsScalarFieldEnum | Sqlx_migrationsScalarFieldEnum[]
  }

  /**
   * sqlx_migrations findFirstOrThrow
   */
  export type sqlx_migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sqlx_migrations.
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sqlx_migrations.
     */
    distinct?: Sqlx_migrationsScalarFieldEnum | Sqlx_migrationsScalarFieldEnum[]
  }

  /**
   * sqlx_migrations findMany
   */
  export type sqlx_migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sqlx_migrations.
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    distinct?: Sqlx_migrationsScalarFieldEnum | Sqlx_migrationsScalarFieldEnum[]
  }

  /**
   * sqlx_migrations create
   */
  export type sqlx_migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a sqlx_migrations.
     */
    data: XOR<sqlx_migrationsCreateInput, sqlx_migrationsUncheckedCreateInput>
  }

  /**
   * sqlx_migrations createMany
   */
  export type sqlx_migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sqlx_migrations.
     */
    data: sqlx_migrationsCreateManyInput | sqlx_migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sqlx_migrations createManyAndReturn
   */
  export type sqlx_migrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data used to create many sqlx_migrations.
     */
    data: sqlx_migrationsCreateManyInput | sqlx_migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sqlx_migrations update
   */
  export type sqlx_migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a sqlx_migrations.
     */
    data: XOR<sqlx_migrationsUpdateInput, sqlx_migrationsUncheckedUpdateInput>
    /**
     * Choose, which sqlx_migrations to update.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations updateMany
   */
  export type sqlx_migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sqlx_migrations.
     */
    data: XOR<sqlx_migrationsUpdateManyMutationInput, sqlx_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which sqlx_migrations to update
     */
    where?: sqlx_migrationsWhereInput
    /**
     * Limit how many sqlx_migrations to update.
     */
    limit?: number
  }

  /**
   * sqlx_migrations updateManyAndReturn
   */
  export type sqlx_migrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data used to update sqlx_migrations.
     */
    data: XOR<sqlx_migrationsUpdateManyMutationInput, sqlx_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which sqlx_migrations to update
     */
    where?: sqlx_migrationsWhereInput
    /**
     * Limit how many sqlx_migrations to update.
     */
    limit?: number
  }

  /**
   * sqlx_migrations upsert
   */
  export type sqlx_migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the sqlx_migrations to update in case it exists.
     */
    where: sqlx_migrationsWhereUniqueInput
    /**
     * In case the sqlx_migrations found by the `where` argument doesn't exist, create a new sqlx_migrations with this data.
     */
    create: XOR<sqlx_migrationsCreateInput, sqlx_migrationsUncheckedCreateInput>
    /**
     * In case the sqlx_migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sqlx_migrationsUpdateInput, sqlx_migrationsUncheckedUpdateInput>
  }

  /**
   * sqlx_migrations delete
   */
  export type sqlx_migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter which sqlx_migrations to delete.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations deleteMany
   */
  export type sqlx_migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sqlx_migrations to delete
     */
    where?: sqlx_migrationsWhereInput
    /**
     * Limit how many sqlx_migrations to delete.
     */
    limit?: number
  }

  /**
   * sqlx_migrations without action
   */
  export type sqlx_migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
  }


  /**
   * Model reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ReportsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type ReportsMinAggregateOutputType = {
    id: bigint | null
    date: Date | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: bigint | null
  }

  export type ReportsMaxAggregateOutputType = {
    id: bigint | null
    date: Date | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: bigint | null
  }

  export type ReportsCountAggregateOutputType = {
    id: number
    date: number
    content: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type ReportsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ReportsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ReportsMinAggregateInputType = {
    id?: true
    date?: true
    content?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ReportsMaxAggregateInputType = {
    id?: true
    date?: true
    content?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ReportsCountAggregateInputType = {
    id?: true
    date?: true
    content?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to aggregate.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }




  export type reportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithAggregationInput | reportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: reportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _avg?: ReportsAvgAggregateInputType
    _sum?: ReportsSumAggregateInputType
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    id: bigint
    date: Date
    content: string | null
    created_at: Date
    updated_at: Date
    user_id: bigint | null
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends reportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >


  export type reportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    users?: boolean | reports$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    users?: boolean | reports$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    users?: boolean | reports$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectScalar = {
    id?: boolean
    date?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type reportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "content" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["reports"]>
  export type reportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | reports$usersArgs<ExtArgs>
  }
  export type reportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | reports$usersArgs<ExtArgs>
  }
  export type reportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | reports$usersArgs<ExtArgs>
  }

  export type $reportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reports"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      date: Date
      content: string | null
      created_at: Date
      updated_at: Date
      user_id: bigint | null
    }, ExtArgs["result"]["reports"]>
    composites: {}
  }

  type reportsGetPayload<S extends boolean | null | undefined | reportsDefaultArgs> = $Result.GetResult<Prisma.$reportsPayload, S>

  type reportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportsCountAggregateInputType | true
    }

  export interface reportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reports'], meta: { name: 'reports' } }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {reportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportsFindUniqueArgs>(args: SelectSubset<T, reportsFindUniqueArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportsFindUniqueOrThrowArgs>(args: SelectSubset<T, reportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportsFindFirstArgs>(args?: SelectSubset<T, reportsFindFirstArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportsFindFirstOrThrowArgs>(args?: SelectSubset<T, reportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportsWithIdOnly = await prisma.reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportsFindManyArgs>(args?: SelectSubset<T, reportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reports.
     * @param {reportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     * 
     */
    create<T extends reportsCreateArgs>(args: SelectSubset<T, reportsCreateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportsCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportsCreateManyArgs>(args?: SelectSubset<T, reportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {reportsCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportsCreateManyAndReturnArgs>(args?: SelectSubset<T, reportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reports.
     * @param {reportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     * 
     */
    delete<T extends reportsDeleteArgs>(args: SelectSubset<T, reportsDeleteArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reports.
     * @param {reportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportsUpdateArgs>(args: SelectSubset<T, reportsUpdateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportsDeleteManyArgs>(args?: SelectSubset<T, reportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportsUpdateManyArgs>(args: SelectSubset<T, reportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {reportsUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reportsUpdateManyAndReturnArgs>(args: SelectSubset<T, reportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reports.
     * @param {reportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
     */
    upsert<T extends reportsUpsertArgs>(args: SelectSubset<T, reportsUpsertArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportsCountArgs>(
      args?: Subset<T, reportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportsAggregateArgs>(args: Subset<T, ReportsAggregateArgs>): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportsGroupByArgs['orderBy'] }
        : { orderBy?: reportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reports model
   */
  readonly fields: reportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends reports$usersArgs<ExtArgs> = {}>(args?: Subset<T, reports$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reports model
   */
  interface reportsFieldRefs {
    readonly id: FieldRef<"reports", 'BigInt'>
    readonly date: FieldRef<"reports", 'DateTime'>
    readonly content: FieldRef<"reports", 'String'>
    readonly created_at: FieldRef<"reports", 'DateTime'>
    readonly updated_at: FieldRef<"reports", 'DateTime'>
    readonly user_id: FieldRef<"reports", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * reports findUnique
   */
  export type reportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findUniqueOrThrow
   */
  export type reportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findFirst
   */
  export type reportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findFirstOrThrow
   */
  export type reportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findMany
   */
  export type reportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports create
   */
  export type reportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The data needed to create a reports.
     */
    data: XOR<reportsCreateInput, reportsUncheckedCreateInput>
  }

  /**
   * reports createMany
   */
  export type reportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportsCreateManyInput | reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reports createManyAndReturn
   */
  export type reportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data used to create many reports.
     */
    data: reportsCreateManyInput | reportsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reports update
   */
  export type reportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The data needed to update a reports.
     */
    data: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
    /**
     * Choose, which reports to update.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports updateMany
   */
  export type reportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * reports updateManyAndReturn
   */
  export type reportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data used to update reports.
     */
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reports upsert
   */
  export type reportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The filter to search for the reports to update in case it exists.
     */
    where: reportsWhereUniqueInput
    /**
     * In case the reports found by the `where` argument doesn't exist, create a new reports with this data.
     */
    create: XOR<reportsCreateInput, reportsUncheckedCreateInput>
    /**
     * In case the reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
  }

  /**
   * reports delete
   */
  export type reportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter which reports to delete.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports deleteMany
   */
  export type reportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * reports.users
   */
  export type reports$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * reports without action
   */
  export type reportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    name: string | null
    email: string
    password: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    reports?: boolean | users$reportsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | users$reportsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      reports: Prisma.$reportsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      email: string
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends users$reportsArgs<ExtArgs> = {}>(args?: Subset<T, users$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.reports
   */
  export type users$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    cursor?: reportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Sqlx_migrationsScalarFieldEnum: {
    version: 'version',
    description: 'description',
    installed_on: 'installed_on',
    success: 'success',
    checksum: 'checksum',
    execution_time: 'execution_time'
  };

  export type Sqlx_migrationsScalarFieldEnum = (typeof Sqlx_migrationsScalarFieldEnum)[keyof typeof Sqlx_migrationsScalarFieldEnum]


  export const ReportsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type ReportsScalarFieldEnum = (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type sqlx_migrationsWhereInput = {
    AND?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    OR?: sqlx_migrationsWhereInput[]
    NOT?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    version?: BigIntFilter<"sqlx_migrations"> | bigint | number
    description?: StringFilter<"sqlx_migrations"> | string
    installed_on?: DateTimeFilter<"sqlx_migrations"> | Date | string
    success?: BoolFilter<"sqlx_migrations"> | boolean
    checksum?: BytesFilter<"sqlx_migrations"> | Uint8Array
    execution_time?: BigIntFilter<"sqlx_migrations"> | bigint | number
  }

  export type sqlx_migrationsOrderByWithRelationInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsWhereUniqueInput = Prisma.AtLeast<{
    version?: bigint | number
    AND?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    OR?: sqlx_migrationsWhereInput[]
    NOT?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    description?: StringFilter<"sqlx_migrations"> | string
    installed_on?: DateTimeFilter<"sqlx_migrations"> | Date | string
    success?: BoolFilter<"sqlx_migrations"> | boolean
    checksum?: BytesFilter<"sqlx_migrations"> | Uint8Array
    execution_time?: BigIntFilter<"sqlx_migrations"> | bigint | number
  }, "version">

  export type sqlx_migrationsOrderByWithAggregationInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
    _count?: sqlx_migrationsCountOrderByAggregateInput
    _avg?: sqlx_migrationsAvgOrderByAggregateInput
    _max?: sqlx_migrationsMaxOrderByAggregateInput
    _min?: sqlx_migrationsMinOrderByAggregateInput
    _sum?: sqlx_migrationsSumOrderByAggregateInput
  }

  export type sqlx_migrationsScalarWhereWithAggregatesInput = {
    AND?: sqlx_migrationsScalarWhereWithAggregatesInput | sqlx_migrationsScalarWhereWithAggregatesInput[]
    OR?: sqlx_migrationsScalarWhereWithAggregatesInput[]
    NOT?: sqlx_migrationsScalarWhereWithAggregatesInput | sqlx_migrationsScalarWhereWithAggregatesInput[]
    version?: BigIntWithAggregatesFilter<"sqlx_migrations"> | bigint | number
    description?: StringWithAggregatesFilter<"sqlx_migrations"> | string
    installed_on?: DateTimeWithAggregatesFilter<"sqlx_migrations"> | Date | string
    success?: BoolWithAggregatesFilter<"sqlx_migrations"> | boolean
    checksum?: BytesWithAggregatesFilter<"sqlx_migrations"> | Uint8Array
    execution_time?: BigIntWithAggregatesFilter<"sqlx_migrations"> | bigint | number
  }

  export type reportsWhereInput = {
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    id?: BigIntFilter<"reports"> | bigint | number
    date?: DateTimeFilter<"reports"> | Date | string
    content?: StringNullableFilter<"reports"> | string | null
    created_at?: DateTimeFilter<"reports"> | Date | string
    updated_at?: DateTimeFilter<"reports"> | Date | string
    user_id?: BigIntNullableFilter<"reports"> | bigint | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type reportsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type reportsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    date?: Date | string
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    content?: StringNullableFilter<"reports"> | string | null
    created_at?: DateTimeFilter<"reports"> | Date | string
    updated_at?: DateTimeFilter<"reports"> | Date | string
    user_id?: BigIntNullableFilter<"reports"> | bigint | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "date">

  export type reportsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: reportsCountOrderByAggregateInput
    _avg?: reportsAvgOrderByAggregateInput
    _max?: reportsMaxOrderByAggregateInput
    _min?: reportsMinOrderByAggregateInput
    _sum?: reportsSumOrderByAggregateInput
  }

  export type reportsScalarWhereWithAggregatesInput = {
    AND?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    OR?: reportsScalarWhereWithAggregatesInput[]
    NOT?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"reports"> | bigint | number
    date?: DateTimeWithAggregatesFilter<"reports"> | Date | string
    content?: StringNullableWithAggregatesFilter<"reports"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"reports"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"reports"> | Date | string
    user_id?: BigIntNullableWithAggregatesFilter<"reports"> | bigint | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    reports?: ReportsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reports?: reportsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    reports?: ReportsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type sqlx_migrationsCreateInput = {
    version: bigint | number
    description: string
    installed_on?: Date | string
    success: boolean
    checksum: Uint8Array
    execution_time: bigint | number
  }

  export type sqlx_migrationsUncheckedCreateInput = {
    version: bigint | number
    description: string
    installed_on?: Date | string
    success: boolean
    checksum: Uint8Array
    execution_time: bigint | number
  }

  export type sqlx_migrationsUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type sqlx_migrationsUncheckedUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type sqlx_migrationsCreateManyInput = {
    version: bigint | number
    description: string
    installed_on?: Date | string
    success: boolean
    checksum: Uint8Array
    execution_time: bigint | number
  }

  export type sqlx_migrationsUpdateManyMutationInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type sqlx_migrationsUncheckedUpdateManyInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type reportsCreateInput = {
    id?: bigint | number
    date: Date | string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedOneWithoutReportsInput
  }

  export type reportsUncheckedCreateInput = {
    id?: bigint | number
    date: Date | string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: bigint | number | null
  }

  export type reportsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutReportsNestedInput
  }

  export type reportsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type reportsCreateManyInput = {
    id?: bigint | number
    date: Date | string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id?: bigint | number | null
  }

  export type reportsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reportsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type usersCreateInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    reports?: reportsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    reports?: reportsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: reportsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: reportsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type sqlx_migrationsCountOrderByAggregateInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsAvgOrderByAggregateInput = {
    version?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsMaxOrderByAggregateInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsMinOrderByAggregateInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsSumOrderByAggregateInput = {
    version?: SortOrder
    execution_time?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reportsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type reportsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type reportsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type reportsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type reportsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ReportsListRelationFilter = {
    every?: reportsWhereInput
    some?: reportsWhereInput
    none?: reportsWhereInput
  }

  export type reportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type usersCreateNestedOneWithoutReportsInput = {
    create?: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReportsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneWithoutReportsNestedInput = {
    create?: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReportsInput
    upsert?: usersUpsertWithoutReportsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReportsInput, usersUpdateWithoutReportsInput>, usersUncheckedUpdateWithoutReportsInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type reportsCreateNestedManyWithoutUsersInput = {
    create?: XOR<reportsCreateWithoutUsersInput, reportsUncheckedCreateWithoutUsersInput> | reportsCreateWithoutUsersInput[] | reportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsersInput | reportsCreateOrConnectWithoutUsersInput[]
    createMany?: reportsCreateManyUsersInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type reportsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reportsCreateWithoutUsersInput, reportsUncheckedCreateWithoutUsersInput> | reportsCreateWithoutUsersInput[] | reportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsersInput | reportsCreateOrConnectWithoutUsersInput[]
    createMany?: reportsCreateManyUsersInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type reportsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reportsCreateWithoutUsersInput, reportsUncheckedCreateWithoutUsersInput> | reportsCreateWithoutUsersInput[] | reportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsersInput | reportsCreateOrConnectWithoutUsersInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUsersInput | reportsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reportsCreateManyUsersInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUsersInput | reportsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUsersInput | reportsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type reportsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reportsCreateWithoutUsersInput, reportsUncheckedCreateWithoutUsersInput> | reportsCreateWithoutUsersInput[] | reportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsersInput | reportsCreateOrConnectWithoutUsersInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUsersInput | reportsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reportsCreateManyUsersInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUsersInput | reportsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUsersInput | reportsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutReportsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUncheckedCreateWithoutReportsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersCreateOrConnectWithoutReportsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
  }

  export type usersUpsertWithoutReportsInput = {
    update: XOR<usersUpdateWithoutReportsInput, usersUncheckedUpdateWithoutReportsInput>
    create: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReportsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReportsInput, usersUncheckedUpdateWithoutReportsInput>
  }

  export type usersUpdateWithoutReportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutReportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reportsCreateWithoutUsersInput = {
    id?: bigint | number
    date: Date | string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reportsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    date: Date | string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reportsCreateOrConnectWithoutUsersInput = {
    where: reportsWhereUniqueInput
    create: XOR<reportsCreateWithoutUsersInput, reportsUncheckedCreateWithoutUsersInput>
  }

  export type reportsCreateManyUsersInputEnvelope = {
    data: reportsCreateManyUsersInput | reportsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reportsUpsertWithWhereUniqueWithoutUsersInput = {
    where: reportsWhereUniqueInput
    update: XOR<reportsUpdateWithoutUsersInput, reportsUncheckedUpdateWithoutUsersInput>
    create: XOR<reportsCreateWithoutUsersInput, reportsUncheckedCreateWithoutUsersInput>
  }

  export type reportsUpdateWithWhereUniqueWithoutUsersInput = {
    where: reportsWhereUniqueInput
    data: XOR<reportsUpdateWithoutUsersInput, reportsUncheckedUpdateWithoutUsersInput>
  }

  export type reportsUpdateManyWithWhereWithoutUsersInput = {
    where: reportsScalarWhereInput
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyWithoutUsersInput>
  }

  export type reportsScalarWhereInput = {
    AND?: reportsScalarWhereInput | reportsScalarWhereInput[]
    OR?: reportsScalarWhereInput[]
    NOT?: reportsScalarWhereInput | reportsScalarWhereInput[]
    id?: BigIntFilter<"reports"> | bigint | number
    date?: DateTimeFilter<"reports"> | Date | string
    content?: StringNullableFilter<"reports"> | string | null
    created_at?: DateTimeFilter<"reports"> | Date | string
    updated_at?: DateTimeFilter<"reports"> | Date | string
    user_id?: BigIntNullableFilter<"reports"> | bigint | number | null
  }

  export type reportsCreateManyUsersInput = {
    id?: bigint | number
    date: Date | string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reportsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reportsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reportsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
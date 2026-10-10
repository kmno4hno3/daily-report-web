/**
 * Client
 **/

import * as runtime from "./runtime/library.js"
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
export type sqlx_migrations =
	$Result.DefaultSelection<Prisma.$sqlx_migrationsPayload>
/**
 * Model Report
 *
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model VerificationToken
 *
 */
export type VerificationToken =
	$Result.DefaultSelection<Prisma.$VerificationTokenPayload>

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
	U = "log" extends keyof ClientOptions
		? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions["log"]>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] }

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

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
	)
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
		) => void,
	): PrismaClient

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>

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
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>

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
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>

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
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>

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
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number
			timeout?: number
			isolationLevel?: Prisma.TransactionIsolationLevel
		},
	): $Utils.JsPromise<R>

	$extends: $Extensions.ExtendsHook<
		"extends",
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs
			}
		>
	>

	/**
	 * `prisma.sqlx_migrations`: Exposes CRUD operations for the **sqlx_migrations** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Sqlx_migrations
	 * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
	 * ```
	 */
	get sqlx_migrations(): Prisma.sqlx_migrationsDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.report`: Exposes CRUD operations for the **Report** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Reports
	 * const reports = await prisma.report.findMany()
	 * ```
	 */
	get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.account`: Exposes CRUD operations for the **Account** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Accounts
	 * const accounts = await prisma.account.findMany()
	 * ```
	 */
	get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more VerificationTokens
	 * const verificationTokens = await prisma.verificationToken.findMany()
	 * ```
	 */
	get verificationToken(): Prisma.VerificationTokenDelegate<
		ExtArgs,
		ClientOptions
	>
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
	export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
		infer U
	>
		? U
		: T

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P]
	}

	export type Enumerable<T> = T | Array<T>

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
		[key in keyof T]: key extends keyof U ? T[key] : never
	}

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	} & (T extends SelectAndInclude
		? "Please either choose `select` or `include`."
		: T extends SelectAndOmit
			? "Please either choose `select` or `omit`."
			: {})

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	} & K

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T

	/**
	 * Is T a Record?
	 */
	type IsObject<T> = T extends Array<any>
		? False
		: T extends Date
			? False
			: T extends Uint8Array
				? False
				: T extends bigint
					? False
					: T extends object
						? True
						: False

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T> = T extends Array<infer U> ? U : T

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

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>
		0: EitherLoose<O, K>
	}[strict]

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = O extends unknown ? _Either<O, K, strict> : never

	export type Union = any

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
	} & {}

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown
			? (k: U) => void
			: never
	) extends (k: infer I) => void
		? I
		: never

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
	} & {}

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>
			}
		>
	>

	type Key = string | number | symbol
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never
	type AtStrict<O extends object, K extends Key> = O[K & keyof O]
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>
		0: AtLoose<O, K>
	}[strict]

	export type ComputeRaw<A> = A extends Function
		? A
		: {
				[K in keyof A]: A[K]
			} & {}

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K]
	} & {}

	type _Record<K extends keyof any, T> = {
		[P in K]: T
	}

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
			: never
	>

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

	export type Extends<A1, A2> = [A1] extends [never]
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

	type Cast<A, B> = A extends B ? A : B

	export const type: unique symbol

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never
			}
		: never

	type FieldPaths<
		T,
		U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
	> = IsObject<T> extends True ? U : T

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<"OR", K>, Extends<"AND", K>>,
			Extends<"NOT", K>
		> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
					>
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
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>

	export const ModelName: {
		sqlx_migrations: "sqlx_migrations"
		Report: "Report"
		User: "User"
		Account: "Account"
		VerificationToken: "VerificationToken"
	}

	export type ModelName = (typeof ModelName)[keyof typeof ModelName]

	export type Datasources = {
		db?: Datasource
	}

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<
			this["params"]["extArgs"],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions
		}
		meta: {
			modelProps:
				| "sqlx_migrations"
				| "report"
				| "user"
				| "account"
				| "verificationToken"
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
						result:
							| $Utils.Optional<Sqlx_migrationsCountAggregateOutputType>
							| number
					}
				}
			}
			Report: {
				payload: Prisma.$ReportPayload<ExtArgs>
				fields: Prisma.ReportFieldRefs
				operations: {
					findUnique: {
						args: Prisma.ReportFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>
					}
					findFirst: {
						args: Prisma.ReportFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>
					}
					findMany: {
						args: Prisma.ReportFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
					}
					create: {
						args: Prisma.ReportCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>
					}
					createMany: {
						args: Prisma.ReportCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
					}
					delete: {
						args: Prisma.ReportDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>
					}
					update: {
						args: Prisma.ReportUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>
					}
					deleteMany: {
						args: Prisma.ReportDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.ReportUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
					}
					upsert: {
						args: Prisma.ReportUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ReportPayload>
					}
					aggregate: {
						args: Prisma.ReportAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateReport>
					}
					groupBy: {
						args: Prisma.ReportGroupByArgs<ExtArgs>
						result: $Utils.Optional<ReportGroupByOutputType>[]
					}
					count: {
						args: Prisma.ReportCountArgs<ExtArgs>
						result: $Utils.Optional<ReportCountAggregateOutputType> | number
					}
				}
			}
			User: {
				payload: Prisma.$UserPayload<ExtArgs>
				fields: Prisma.UserFieldRefs
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateUser>
					}
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>
						result: $Utils.Optional<UserGroupByOutputType>[]
					}
					count: {
						args: Prisma.UserCountArgs<ExtArgs>
						result: $Utils.Optional<UserCountAggregateOutputType> | number
					}
				}
			}
			Account: {
				payload: Prisma.$AccountPayload<ExtArgs>
				fields: Prisma.AccountFieldRefs
				operations: {
					findUnique: {
						args: Prisma.AccountFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					findFirst: {
						args: Prisma.AccountFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					findMany: {
						args: Prisma.AccountFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
					}
					create: {
						args: Prisma.AccountCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					createMany: {
						args: Prisma.AccountCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
					}
					delete: {
						args: Prisma.AccountDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					update: {
						args: Prisma.AccountUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					deleteMany: {
						args: Prisma.AccountDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.AccountUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
					}
					upsert: {
						args: Prisma.AccountUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					aggregate: {
						args: Prisma.AccountAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateAccount>
					}
					groupBy: {
						args: Prisma.AccountGroupByArgs<ExtArgs>
						result: $Utils.Optional<AccountGroupByOutputType>[]
					}
					count: {
						args: Prisma.AccountCountArgs<ExtArgs>
						result: $Utils.Optional<AccountCountAggregateOutputType> | number
					}
				}
			}
			VerificationToken: {
				payload: Prisma.$VerificationTokenPayload<ExtArgs>
				fields: Prisma.VerificationTokenFieldRefs
				operations: {
					findUnique: {
						args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
					}
					findFirst: {
						args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
					}
					findMany: {
						args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
					}
					create: {
						args: Prisma.VerificationTokenCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
					}
					createMany: {
						args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
					}
					delete: {
						args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
					}
					update: {
						args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
					}
					deleteMany: {
						args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
					}
					upsert: {
						args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
					}
					aggregate: {
						args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateVerificationToken>
					}
					groupBy: {
						args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
						result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
					}
					count: {
						args: Prisma.VerificationTokenCountArgs<ExtArgs>
						result:
							| $Utils.Optional<VerificationTokenCountAggregateOutputType>
							| number
					}
				}
			}
		}
	} & {
		other: {
			payload: any
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
			}
		}
	}
	export const defineExtension: $Extensions.ExtendsHook<
		"define",
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>
	export type DefaultPrismaClient = PrismaClient
	export type ErrorFormat = "pretty" | "colorless" | "minimal"
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
		report?: ReportOmit
		user?: UserOmit
		account?: AccountOmit
		verificationToken?: VerificationTokenOmit
	}

	/* Types for Logging */
	export type LogLevel = "info" | "query" | "warn" | "error"
	export type LogDefinition = {
		level: LogLevel
		emit: "stdout" | "event"
	}

	export type GetLogType<T extends LogLevel | LogDefinition> =
		T extends LogDefinition
			? T["emit"] extends "event"
				? T["level"]
				: never
			: never
	export type GetEvents<T> = T extends Array<LogLevel | LogDefinition>
		? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
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
		| "findUnique"
		| "findUniqueOrThrow"
		| "findMany"
		| "findFirst"
		| "findFirstOrThrow"
		| "create"
		| "createMany"
		| "createManyAndReturn"
		| "update"
		| "updateMany"
		| "updateManyAndReturn"
		| "upsert"
		| "delete"
		| "deleteMany"
		| "executeRaw"
		| "queryRaw"
		| "aggregate"
		| "count"
		| "runCommandRaw"
		| "findRaw"
		| "groupBy"

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
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>,
	): LogLevel | undefined

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>

	export type Datasource = {
		url?: string
	}

	/**
	 * Count Types
	 */

	/**
	 * Count Type UserCountOutputType
	 */

	export type UserCountOutputType = {
		accounts: number
		reports: number
	}

	export type UserCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		accounts?: boolean | UserCountOutputTypeCountAccountsArgs
		reports?: boolean | UserCountOutputTypeCountReportsArgs
	}

	// Custom InputTypes
	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserCountOutputType
		 */
		select?: UserCountOutputTypeSelect<ExtArgs> | null
	}

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountAccountsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: AccountWhereInput
	}

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountReportsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ReportWhereInput
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
		executionTime: number | null
	}

	export type Sqlx_migrationsSumAggregateOutputType = {
		version: bigint | null
		executionTime: bigint | null
	}

	export type Sqlx_migrationsMinAggregateOutputType = {
		version: bigint | null
		description: string | null
		installedOn: Date | null
		success: boolean | null
		checksum: Uint8Array | null
		executionTime: bigint | null
	}

	export type Sqlx_migrationsMaxAggregateOutputType = {
		version: bigint | null
		description: string | null
		installedOn: Date | null
		success: boolean | null
		checksum: Uint8Array | null
		executionTime: bigint | null
	}

	export type Sqlx_migrationsCountAggregateOutputType = {
		version: number
		description: number
		installedOn: number
		success: number
		checksum: number
		executionTime: number
		_all: number
	}

	export type Sqlx_migrationsAvgAggregateInputType = {
		version?: true
		executionTime?: true
	}

	export type Sqlx_migrationsSumAggregateInputType = {
		version?: true
		executionTime?: true
	}

	export type Sqlx_migrationsMinAggregateInputType = {
		version?: true
		description?: true
		installedOn?: true
		success?: true
		checksum?: true
		executionTime?: true
	}

	export type Sqlx_migrationsMaxAggregateInputType = {
		version?: true
		description?: true
		installedOn?: true
		success?: true
		checksum?: true
		executionTime?: true
	}

	export type Sqlx_migrationsCountAggregateInputType = {
		version?: true
		description?: true
		installedOn?: true
		success?: true
		checksum?: true
		executionTime?: true
		_all?: true
	}

	export type Sqlx_migrationsAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which sqlx_migrations to aggregate.
		 */
		where?: sqlx_migrationsWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of sqlx_migrations to fetch.
		 */
		orderBy?:
			| sqlx_migrationsOrderByWithRelationInput
			| sqlx_migrationsOrderByWithRelationInput[]
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

	export type GetSqlx_migrationsAggregateType<
		T extends Sqlx_migrationsAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateSqlx_migrations]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateSqlx_migrations[P]>
			: GetScalarType<T[P], AggregateSqlx_migrations[P]>
	}

	export type sqlx_migrationsGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: sqlx_migrationsWhereInput
		orderBy?:
			| sqlx_migrationsOrderByWithAggregationInput
			| sqlx_migrationsOrderByWithAggregationInput[]
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
		installedOn: Date
		success: boolean
		checksum: Uint8Array
		executionTime: bigint
		_count: Sqlx_migrationsCountAggregateOutputType | null
		_avg: Sqlx_migrationsAvgAggregateOutputType | null
		_sum: Sqlx_migrationsSumAggregateOutputType | null
		_min: Sqlx_migrationsMinAggregateOutputType | null
		_max: Sqlx_migrationsMaxAggregateOutputType | null
	}

	type GetSqlx_migrationsGroupByPayload<T extends sqlx_migrationsGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<Sqlx_migrationsGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof Sqlx_migrationsGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], Sqlx_migrationsGroupByOutputType[P]>
						: GetScalarType<T[P], Sqlx_migrationsGroupByOutputType[P]>
				}
			>
		>

	export type sqlx_migrationsSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			version?: boolean
			description?: boolean
			installedOn?: boolean
			success?: boolean
			checksum?: boolean
			executionTime?: boolean
		},
		ExtArgs["result"]["sqlx_migrations"]
	>

	export type sqlx_migrationsSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			version?: boolean
			description?: boolean
			installedOn?: boolean
			success?: boolean
			checksum?: boolean
			executionTime?: boolean
		},
		ExtArgs["result"]["sqlx_migrations"]
	>

	export type sqlx_migrationsSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			version?: boolean
			description?: boolean
			installedOn?: boolean
			success?: boolean
			checksum?: boolean
			executionTime?: boolean
		},
		ExtArgs["result"]["sqlx_migrations"]
	>

	export type sqlx_migrationsSelectScalar = {
		version?: boolean
		description?: boolean
		installedOn?: boolean
		success?: boolean
		checksum?: boolean
		executionTime?: boolean
	}

	export type sqlx_migrationsOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "version"
		| "description"
		| "installedOn"
		| "success"
		| "checksum"
		| "executionTime",
		ExtArgs["result"]["sqlx_migrations"]
	>

	export type $sqlx_migrationsPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "sqlx_migrations"
		objects: {}
		scalars: $Extensions.GetPayloadResult<
			{
				version: bigint
				description: string
				installedOn: Date
				success: boolean
				checksum: Uint8Array
				executionTime: bigint
			},
			ExtArgs["result"]["sqlx_migrations"]
		>
		composites: {}
	}

	type sqlx_migrationsGetPayload<
		S extends boolean | null | undefined | sqlx_migrationsDefaultArgs,
	> = $Result.GetResult<Prisma.$sqlx_migrationsPayload, S>

	type sqlx_migrationsCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		sqlx_migrationsFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: Sqlx_migrationsCountAggregateInputType | true
	}

	export interface sqlx_migrationsDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["sqlx_migrations"]
			meta: { name: "sqlx_migrations" }
		}
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
		findUnique<T extends sqlx_migrationsFindUniqueArgs>(
			args: SelectSubset<T, sqlx_migrationsFindUniqueArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findUniqueOrThrow<T extends sqlx_migrationsFindUniqueOrThrowArgs>(
			args: SelectSubset<T, sqlx_migrationsFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findFirst<T extends sqlx_migrationsFindFirstArgs>(
			args?: SelectSubset<T, sqlx_migrationsFindFirstArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findFirstOrThrow<T extends sqlx_migrationsFindFirstOrThrowArgs>(
			args?: SelectSubset<T, sqlx_migrationsFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findMany<T extends sqlx_migrationsFindManyArgs>(
			args?: SelectSubset<T, sqlx_migrationsFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>

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
		create<T extends sqlx_migrationsCreateArgs>(
			args: SelectSubset<T, sqlx_migrationsCreateArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		createMany<T extends sqlx_migrationsCreateManyArgs>(
			args?: SelectSubset<T, sqlx_migrationsCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

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
		createManyAndReturn<T extends sqlx_migrationsCreateManyAndReturnArgs>(
			args?: SelectSubset<T, sqlx_migrationsCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>

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
		delete<T extends sqlx_migrationsDeleteArgs>(
			args: SelectSubset<T, sqlx_migrationsDeleteArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		update<T extends sqlx_migrationsUpdateArgs>(
			args: SelectSubset<T, sqlx_migrationsUpdateArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		deleteMany<T extends sqlx_migrationsDeleteManyArgs>(
			args?: SelectSubset<T, sqlx_migrationsDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

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
		updateMany<T extends sqlx_migrationsUpdateManyArgs>(
			args: SelectSubset<T, sqlx_migrationsUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

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
		updateManyAndReturn<T extends sqlx_migrationsUpdateManyAndReturnArgs>(
			args: SelectSubset<T, sqlx_migrationsUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>

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
		upsert<T extends sqlx_migrationsUpsertArgs>(
			args: SelectSubset<T, sqlx_migrationsUpsertArgs<ExtArgs>>,
		): Prisma__sqlx_migrationsClient<
			$Result.GetResult<
				Prisma.$sqlx_migrationsPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], Sqlx_migrationsCountAggregateOutputType>
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
		aggregate<T extends Sqlx_migrationsAggregateArgs>(
			args: Subset<T, Sqlx_migrationsAggregateArgs>,
		): Prisma.PrismaPromise<GetSqlx_migrationsAggregateType<T>>

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
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: sqlx_migrationsGroupByArgs["orderBy"] }
				: { orderBy?: sqlx_migrationsGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										]
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, sqlx_migrationsGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetSqlx_migrationsGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the sqlx_migrations model
		 */
		readonly fields: sqlx_migrationsFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for sqlx_migrations.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__sqlx_migrationsClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise"
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
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
		readonly version: FieldRef<"sqlx_migrations", "BigInt">
		readonly description: FieldRef<"sqlx_migrations", "String">
		readonly installedOn: FieldRef<"sqlx_migrations", "DateTime">
		readonly success: FieldRef<"sqlx_migrations", "Boolean">
		readonly checksum: FieldRef<"sqlx_migrations", "Bytes">
		readonly executionTime: FieldRef<"sqlx_migrations", "BigInt">
	}

	// Custom InputTypes
	/**
	 * sqlx_migrations findUnique
	 */
	export type sqlx_migrationsFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
		orderBy?:
			| sqlx_migrationsOrderByWithRelationInput
			| sqlx_migrationsOrderByWithRelationInput[]
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
	export type sqlx_migrationsFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
		orderBy?:
			| sqlx_migrationsOrderByWithRelationInput
			| sqlx_migrationsOrderByWithRelationInput[]
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
	export type sqlx_migrationsFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
		orderBy?:
			| sqlx_migrationsOrderByWithRelationInput
			| sqlx_migrationsOrderByWithRelationInput[]
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
	export type sqlx_migrationsCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many sqlx_migrations.
		 */
		data: sqlx_migrationsCreateManyInput | sqlx_migrationsCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * sqlx_migrations createManyAndReturn
	 */
	export type sqlx_migrationsCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update sqlx_migrations.
		 */
		data: XOR<
			sqlx_migrationsUpdateManyMutationInput,
			sqlx_migrationsUncheckedUpdateManyInput
		>
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
	export type sqlx_migrationsUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
		data: XOR<
			sqlx_migrationsUpdateManyMutationInput,
			sqlx_migrationsUncheckedUpdateManyInput
		>
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
	export type sqlx_migrationsUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type sqlx_migrationsDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	 * Model Report
	 */

	export type AggregateReport = {
		_count: ReportCountAggregateOutputType | null
		_avg: ReportAvgAggregateOutputType | null
		_sum: ReportSumAggregateOutputType | null
		_min: ReportMinAggregateOutputType | null
		_max: ReportMaxAggregateOutputType | null
	}

	export type ReportAvgAggregateOutputType = {
		id: number | null
		userId: number | null
	}

	export type ReportSumAggregateOutputType = {
		id: bigint | null
		userId: bigint | null
	}

	export type ReportMinAggregateOutputType = {
		id: bigint | null
		date: Date | null
		content: string | null
		createdAt: Date | null
		updatedAt: Date | null
		userId: bigint | null
	}

	export type ReportMaxAggregateOutputType = {
		id: bigint | null
		date: Date | null
		content: string | null
		createdAt: Date | null
		updatedAt: Date | null
		userId: bigint | null
	}

	export type ReportCountAggregateOutputType = {
		id: number
		date: number
		content: number
		createdAt: number
		updatedAt: number
		userId: number
		_all: number
	}

	export type ReportAvgAggregateInputType = {
		id?: true
		userId?: true
	}

	export type ReportSumAggregateInputType = {
		id?: true
		userId?: true
	}

	export type ReportMinAggregateInputType = {
		id?: true
		date?: true
		content?: true
		createdAt?: true
		updatedAt?: true
		userId?: true
	}

	export type ReportMaxAggregateInputType = {
		id?: true
		date?: true
		content?: true
		createdAt?: true
		updatedAt?: true
		userId?: true
	}

	export type ReportCountAggregateInputType = {
		id?: true
		date?: true
		content?: true
		createdAt?: true
		updatedAt?: true
		userId?: true
		_all?: true
	}

	export type ReportAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Report to aggregate.
		 */
		where?: ReportWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Reports to fetch.
		 */
		orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ReportWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Reports from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Reports.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Reports
		 **/
		_count?: true | ReportCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ReportAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ReportSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ReportMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ReportMaxAggregateInputType
	}

	export type GetReportAggregateType<T extends ReportAggregateArgs> = {
		[P in keyof T & keyof AggregateReport]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateReport[P]>
			: GetScalarType<T[P], AggregateReport[P]>
	}

	export type ReportGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ReportWhereInput
		orderBy?:
			| ReportOrderByWithAggregationInput
			| ReportOrderByWithAggregationInput[]
		by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
		having?: ReportScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: ReportCountAggregateInputType | true
		_avg?: ReportAvgAggregateInputType
		_sum?: ReportSumAggregateInputType
		_min?: ReportMinAggregateInputType
		_max?: ReportMaxAggregateInputType
	}

	export type ReportGroupByOutputType = {
		id: bigint
		date: Date
		content: string | null
		createdAt: Date
		updatedAt: Date
		userId: bigint
		_count: ReportCountAggregateOutputType | null
		_avg: ReportAvgAggregateOutputType | null
		_sum: ReportSumAggregateOutputType | null
		_min: ReportMinAggregateOutputType | null
		_max: ReportMaxAggregateOutputType | null
	}

	type GetReportGroupByPayload<T extends ReportGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ReportGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof ReportGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], ReportGroupByOutputType[P]>
						: GetScalarType<T[P], ReportGroupByOutputType[P]>
				}
			>
		>

	export type ReportSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			date?: boolean
			content?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			userId?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs["result"]["report"]
	>

	export type ReportSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			date?: boolean
			content?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			userId?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs["result"]["report"]
	>

	export type ReportSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			date?: boolean
			content?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			userId?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs["result"]["report"]
	>

	export type ReportSelectScalar = {
		id?: boolean
		date?: boolean
		content?: boolean
		createdAt?: boolean
		updatedAt?: boolean
		userId?: boolean
	}

	export type ReportOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "date" | "content" | "createdAt" | "updatedAt" | "userId",
		ExtArgs["result"]["report"]
	>
	export type ReportInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export type ReportIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export type ReportIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}

	export type $ReportPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Report"
		objects: {
			user: Prisma.$UserPayload<ExtArgs>
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: bigint
				date: Date
				content: string | null
				createdAt: Date
				updatedAt: Date
				userId: bigint
			},
			ExtArgs["result"]["report"]
		>
		composites: {}
	}

	type ReportGetPayload<
		S extends boolean | null | undefined | ReportDefaultArgs,
	> = $Result.GetResult<Prisma.$ReportPayload, S>

	type ReportCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<ReportFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: ReportCountAggregateInputType | true
	}

	export interface ReportDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Report"]
			meta: { name: "Report" }
		}
		/**
		 * Find zero or one Report that matches the filter.
		 * @param {ReportFindUniqueArgs} args - Arguments to find a Report
		 * @example
		 * // Get one Report
		 * const report = await prisma.report.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ReportFindUniqueArgs>(
			args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one Report that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
		 * @example
		 * // Get one Report
		 * const report = await prisma.report.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Report that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ReportFindFirstArgs} args - Arguments to find a Report
		 * @example
		 * // Get one Report
		 * const report = await prisma.report.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ReportFindFirstArgs>(
			args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Report that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
		 * @example
		 * // Get one Report
		 * const report = await prisma.report.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more Reports that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Reports
		 * const reports = await prisma.report.findMany()
		 *
		 * // Get first 10 Reports
		 * const reports = await prisma.report.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ReportFindManyArgs>(
			args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>

		/**
		 * Create a Report.
		 * @param {ReportCreateArgs} args - Arguments to create a Report.
		 * @example
		 * // Create one Report
		 * const Report = await prisma.report.create({
		 *   data: {
		 *     // ... data to create a Report
		 *   }
		 * })
		 *
		 */
		create<T extends ReportCreateArgs>(
			args: SelectSubset<T, ReportCreateArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many Reports.
		 * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
		 * @example
		 * // Create many Reports
		 * const report = await prisma.report.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ReportCreateManyArgs>(
			args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Reports and returns the data saved in the database.
		 * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
		 * @example
		 * // Create many Reports
		 * const report = await prisma.report.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Reports and only return the `id`
		 * const reportWithIdOnly = await prisma.report.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Delete a Report.
		 * @param {ReportDeleteArgs} args - Arguments to delete one Report.
		 * @example
		 * // Delete one Report
		 * const Report = await prisma.report.delete({
		 *   where: {
		 *     // ... filter to delete one Report
		 *   }
		 * })
		 *
		 */
		delete<T extends ReportDeleteArgs>(
			args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Update one Report.
		 * @param {ReportUpdateArgs} args - Arguments to update one Report.
		 * @example
		 * // Update one Report
		 * const report = await prisma.report.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ReportUpdateArgs>(
			args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Delete zero or more Reports.
		 * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
		 * @example
		 * // Delete a few Reports
		 * const { count } = await prisma.report.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ReportDeleteManyArgs>(
			args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Reports.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Reports
		 * const report = await prisma.report.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ReportUpdateManyArgs>(
			args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Reports and returns the data updated in the database.
		 * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
		 * @example
		 * // Update many Reports
		 * const report = await prisma.report.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Reports and only return the `id`
		 * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
		updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Create or update one Report.
		 * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
		 * @example
		 * // Update or create a Report
		 * const report = await prisma.report.upsert({
		 *   create: {
		 *     // ... data to create a Report
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Report we want to update
		 *   }
		 * })
		 */
		upsert<T extends ReportUpsertArgs>(
			args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>,
		): Prisma__ReportClient<
			$Result.GetResult<
				Prisma.$ReportPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Count the number of Reports.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ReportCountArgs} args - Arguments to filter Reports to count.
		 * @example
		 * // Count the number of Reports
		 * const count = await prisma.report.count({
		 *   where: {
		 *     // ... the filter for the Reports we want to count
		 *   }
		 * })
		 **/
		count<T extends ReportCountArgs>(
			args?: Subset<T, ReportCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], ReportCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a Report.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends ReportAggregateArgs>(
			args: Subset<T, ReportAggregateArgs>,
		): Prisma.PrismaPromise<GetReportAggregateType<T>>

		/**
		 * Group by Report.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ReportGroupByArgs} args - Group by arguments.
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
			T extends ReportGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ReportGroupByArgs["orderBy"] }
				: { orderBy?: ReportGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										]
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetReportGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Report model
		 */
		readonly fields: ReportFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Report.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ReportClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise"
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>,
		): Prisma__UserClient<
			| $Result.GetResult<
					Prisma.$UserPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Report model
	 */
	interface ReportFieldRefs {
		readonly id: FieldRef<"Report", "BigInt">
		readonly date: FieldRef<"Report", "DateTime">
		readonly content: FieldRef<"Report", "String">
		readonly createdAt: FieldRef<"Report", "DateTime">
		readonly updatedAt: FieldRef<"Report", "DateTime">
		readonly userId: FieldRef<"Report", "BigInt">
	}

	// Custom InputTypes
	/**
	 * Report findUnique
	 */
	export type ReportFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * Filter, which Report to fetch.
		 */
		where: ReportWhereUniqueInput
	}

	/**
	 * Report findUniqueOrThrow
	 */
	export type ReportFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * Filter, which Report to fetch.
		 */
		where: ReportWhereUniqueInput
	}

	/**
	 * Report findFirst
	 */
	export type ReportFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * Filter, which Report to fetch.
		 */
		where?: ReportWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Reports to fetch.
		 */
		orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Reports.
		 */
		cursor?: ReportWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Reports from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Reports.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Reports.
		 */
		distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
	}

	/**
	 * Report findFirstOrThrow
	 */
	export type ReportFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * Filter, which Report to fetch.
		 */
		where?: ReportWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Reports to fetch.
		 */
		orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Reports.
		 */
		cursor?: ReportWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Reports from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Reports.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Reports.
		 */
		distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
	}

	/**
	 * Report findMany
	 */
	export type ReportFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * Filter, which Reports to fetch.
		 */
		where?: ReportWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Reports to fetch.
		 */
		orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Reports.
		 */
		cursor?: ReportWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Reports from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Reports.
		 */
		skip?: number
		distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
	}

	/**
	 * Report create
	 */
	export type ReportCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * The data needed to create a Report.
		 */
		data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
	}

	/**
	 * Report createMany
	 */
	export type ReportCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Reports.
		 */
		data: ReportCreateManyInput | ReportCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Report createManyAndReturn
	 */
	export type ReportCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * The data used to create many Reports.
		 */
		data: ReportCreateManyInput | ReportCreateManyInput[]
		skipDuplicates?: boolean
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Report update
	 */
	export type ReportUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * The data needed to update a Report.
		 */
		data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
		/**
		 * Choose, which Report to update.
		 */
		where: ReportWhereUniqueInput
	}

	/**
	 * Report updateMany
	 */
	export type ReportUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Reports.
		 */
		data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
		/**
		 * Filter which Reports to update
		 */
		where?: ReportWhereInput
		/**
		 * Limit how many Reports to update.
		 */
		limit?: number
	}

	/**
	 * Report updateManyAndReturn
	 */
	export type ReportUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * The data used to update Reports.
		 */
		data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
		/**
		 * Filter which Reports to update
		 */
		where?: ReportWhereInput
		/**
		 * Limit how many Reports to update.
		 */
		limit?: number
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Report upsert
	 */
	export type ReportUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * The filter to search for the Report to update in case it exists.
		 */
		where: ReportWhereUniqueInput
		/**
		 * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
		 */
		create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
		/**
		 * In case the Report was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
	}

	/**
	 * Report delete
	 */
	export type ReportDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		/**
		 * Filter which Report to delete.
		 */
		where: ReportWhereUniqueInput
	}

	/**
	 * Report deleteMany
	 */
	export type ReportDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Reports to delete
		 */
		where?: ReportWhereInput
		/**
		 * Limit how many Reports to delete.
		 */
		limit?: number
	}

	/**
	 * Report without action
	 */
	export type ReportDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
	}

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null
		_avg: UserAvgAggregateOutputType | null
		_sum: UserSumAggregateOutputType | null
		_min: UserMinAggregateOutputType | null
		_max: UserMaxAggregateOutputType | null
	}

	export type UserAvgAggregateOutputType = {
		id: number | null
	}

	export type UserSumAggregateOutputType = {
		id: bigint | null
	}

	export type UserMinAggregateOutputType = {
		id: bigint | null
		name: string | null
		email: string | null
		password: string | null
		createdAt: Date | null
		updatedAt: Date | null
		image: string | null
		emailVerified: Date | null
	}

	export type UserMaxAggregateOutputType = {
		id: bigint | null
		name: string | null
		email: string | null
		password: string | null
		createdAt: Date | null
		updatedAt: Date | null
		image: string | null
		emailVerified: Date | null
	}

	export type UserCountAggregateOutputType = {
		id: number
		name: number
		email: number
		password: number
		createdAt: number
		updatedAt: number
		image: number
		emailVerified: number
		_all: number
	}

	export type UserAvgAggregateInputType = {
		id?: true
	}

	export type UserSumAggregateInputType = {
		id?: true
	}

	export type UserMinAggregateInputType = {
		id?: true
		name?: true
		email?: true
		password?: true
		createdAt?: true
		updatedAt?: true
		image?: true
		emailVerified?: true
	}

	export type UserMaxAggregateInputType = {
		id?: true
		name?: true
		email?: true
		password?: true
		createdAt?: true
		updatedAt?: true
		image?: true
		emailVerified?: true
	}

	export type UserCountAggregateInputType = {
		id?: true
		name?: true
		email?: true
		password?: true
		createdAt?: true
		updatedAt?: true
		image?: true
		emailVerified?: true
		_all?: true
	}

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: UserAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: UserSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType
	}

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>
	}

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserWhereInput
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[]
		by: UserScalarFieldEnum[] | UserScalarFieldEnum
		having?: UserScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: UserCountAggregateInputType | true
		_avg?: UserAvgAggregateInputType
		_sum?: UserSumAggregateInputType
		_min?: UserMinAggregateInputType
		_max?: UserMaxAggregateInputType
	}

	export type UserGroupByOutputType = {
		id: bigint
		name: string | null
		email: string
		password: string | null
		createdAt: Date
		updatedAt: Date
		image: string | null
		emailVerified: Date | null
		_count: UserCountAggregateOutputType | null
		_avg: UserAvgAggregateOutputType | null
		_sum: UserSumAggregateOutputType | null
		_min: UserMinAggregateOutputType | null
		_max: UserMaxAggregateOutputType | null
	}

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>
			}
		>
	>

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
			email?: boolean
			password?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			image?: boolean
			emailVerified?: boolean
			accounts?: boolean | User$accountsArgs<ExtArgs>
			reports?: boolean | User$reportsArgs<ExtArgs>
			_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
		},
		ExtArgs["result"]["user"]
	>

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
			email?: boolean
			password?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			image?: boolean
			emailVerified?: boolean
		},
		ExtArgs["result"]["user"]
	>

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
			email?: boolean
			password?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			image?: boolean
			emailVerified?: boolean
		},
		ExtArgs["result"]["user"]
	>

	export type UserSelectScalar = {
		id?: boolean
		name?: boolean
		email?: boolean
		password?: boolean
		createdAt?: boolean
		updatedAt?: boolean
		image?: boolean
		emailVerified?: boolean
	}

	export type UserOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "id"
		| "name"
		| "email"
		| "password"
		| "createdAt"
		| "updatedAt"
		| "image"
		| "emailVerified",
		ExtArgs["result"]["user"]
	>
	export type UserInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		accounts?: boolean | User$accountsArgs<ExtArgs>
		reports?: boolean | User$reportsArgs<ExtArgs>
		_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
	}
	export type UserIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {}
	export type UserIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {}

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "User"
		objects: {
			accounts: Prisma.$AccountPayload<ExtArgs>[]
			reports: Prisma.$ReportPayload<ExtArgs>[]
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: bigint
				name: string | null
				email: string
				password: string | null
				createdAt: Date
				updatedAt: Date
				image: string | null
				emailVerified: Date | null
			},
			ExtArgs["result"]["user"]
		>
		composites: {}
	}

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
		$Result.GetResult<Prisma.$UserPayload, S>

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: UserCountAggregateInputType | true
	}

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["User"]
			meta: { name: "User" }
		}
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Users
		 * const users = await prisma.user.findMany()
		 *
		 * // Get first 10 Users
		 * const users = await prisma.user.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>

		/**
		 * Create a User.
		 * @param {UserCreateArgs} args - Arguments to create a User.
		 * @example
		 * // Create one User
		 * const User = await prisma.user.create({
		 *   data: {
		 *     // ... data to create a User
		 *   }
		 * })
		 *
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Delete a User.
		 * @param {UserDeleteArgs} args - Arguments to delete one User.
		 * @example
		 * // Delete one User
		 * const User = await prisma.user.delete({
		 *   where: {
		 *     // ... filter to delete one User
		 *   }
		 * })
		 *
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Update one User.
		 * @param {UserUpdateArgs} args - Arguments to update one User.
		 * @example
		 * // Update one User
		 * const user = await prisma.user.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Delete zero or more Users.
		 * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
		 * @example
		 * // Delete a few Users
		 * const { count } = await prisma.user.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Users and returns the data updated in the database.
		 * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Create or update one User.
		 * @param {UserUpsertArgs} args - Arguments to update or create a User.
		 * @example
		 * // Update or create a User
		 * const user = await prisma.user.upsert({
		 *   create: {
		 *     // ... data to create a User
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the User we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], UserCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>,
		): Prisma.PrismaPromise<GetUserAggregateType<T>>

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
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
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs["orderBy"] }
				: { orderBy?: UserGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										]
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise"
		accounts<T extends User$accountsArgs<ExtArgs> = {}>(
			args?: Subset<T, User$accountsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$AccountPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>
		reports<T extends User$reportsArgs<ExtArgs> = {}>(
			args?: Subset<T, User$reportsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$ReportPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<"User", "BigInt">
		readonly name: FieldRef<"User", "String">
		readonly email: FieldRef<"User", "String">
		readonly password: FieldRef<"User", "String">
		readonly createdAt: FieldRef<"User", "DateTime">
		readonly updatedAt: FieldRef<"User", "DateTime">
		readonly image: FieldRef<"User", "String">
		readonly emailVerified: FieldRef<"User", "DateTime">
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User create
	 */
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>
	}

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput
		/**
		 * Limit how many Users to update.
		 */
		limit?: number
	}

	/**
	 * User updateManyAndReturn
	 */
	export type UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput
		/**
		 * Limit how many Users to update.
		 */
		limit?: number
	}

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
	}

	/**
	 * User delete
	 */
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number
	}

	/**
	 * User.accounts
	 */
	export type User$accountsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		where?: AccountWhereInput
		orderBy?:
			| AccountOrderByWithRelationInput
			| AccountOrderByWithRelationInput[]
		cursor?: AccountWhereUniqueInput
		take?: number
		skip?: number
		distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
	}

	/**
	 * User.reports
	 */
	export type User$reportsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Report
		 */
		select?: ReportSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Report
		 */
		omit?: ReportOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ReportInclude<ExtArgs> | null
		where?: ReportWhereInput
		orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
		cursor?: ReportWhereUniqueInput
		take?: number
		skip?: number
		distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
	}

	/**
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
	}

	/**
	 * Model Account
	 */

	export type AggregateAccount = {
		_count: AccountCountAggregateOutputType | null
		_avg: AccountAvgAggregateOutputType | null
		_sum: AccountSumAggregateOutputType | null
		_min: AccountMinAggregateOutputType | null
		_max: AccountMaxAggregateOutputType | null
	}

	export type AccountAvgAggregateOutputType = {
		id: number | null
		userId: number | null
		expires_at: number | null
	}

	export type AccountSumAggregateOutputType = {
		id: bigint | null
		userId: bigint | null
		expires_at: number | null
	}

	export type AccountMinAggregateOutputType = {
		id: bigint | null
		userId: bigint | null
		type: string | null
		provider: string | null
		providerAccountId: string | null
		refreshToken: string | null
		access_token: string | null
		expires_at: number | null
		token_type: string | null
		scope: string | null
		id_token: string | null
		session_state: string | null
	}

	export type AccountMaxAggregateOutputType = {
		id: bigint | null
		userId: bigint | null
		type: string | null
		provider: string | null
		providerAccountId: string | null
		refreshToken: string | null
		access_token: string | null
		expires_at: number | null
		token_type: string | null
		scope: string | null
		id_token: string | null
		session_state: string | null
	}

	export type AccountCountAggregateOutputType = {
		id: number
		userId: number
		type: number
		provider: number
		providerAccountId: number
		refreshToken: number
		access_token: number
		expires_at: number
		token_type: number
		scope: number
		id_token: number
		session_state: number
		_all: number
	}

	export type AccountAvgAggregateInputType = {
		id?: true
		userId?: true
		expires_at?: true
	}

	export type AccountSumAggregateInputType = {
		id?: true
		userId?: true
		expires_at?: true
	}

	export type AccountMinAggregateInputType = {
		id?: true
		userId?: true
		type?: true
		provider?: true
		providerAccountId?: true
		refreshToken?: true
		access_token?: true
		expires_at?: true
		token_type?: true
		scope?: true
		id_token?: true
		session_state?: true
	}

	export type AccountMaxAggregateInputType = {
		id?: true
		userId?: true
		type?: true
		provider?: true
		providerAccountId?: true
		refreshToken?: true
		access_token?: true
		expires_at?: true
		token_type?: true
		scope?: true
		id_token?: true
		session_state?: true
	}

	export type AccountCountAggregateInputType = {
		id?: true
		userId?: true
		type?: true
		provider?: true
		providerAccountId?: true
		refreshToken?: true
		access_token?: true
		expires_at?: true
		token_type?: true
		scope?: true
		id_token?: true
		session_state?: true
		_all?: true
	}

	export type AccountAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Account to aggregate.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?:
			| AccountOrderByWithRelationInput
			| AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Accounts
		 **/
		_count?: true | AccountCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: AccountAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: AccountSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: AccountMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: AccountMaxAggregateInputType
	}

	export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
		[P in keyof T & keyof AggregateAccount]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateAccount[P]>
			: GetScalarType<T[P], AggregateAccount[P]>
	}

	export type AccountGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: AccountWhereInput
		orderBy?:
			| AccountOrderByWithAggregationInput
			| AccountOrderByWithAggregationInput[]
		by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
		having?: AccountScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: AccountCountAggregateInputType | true
		_avg?: AccountAvgAggregateInputType
		_sum?: AccountSumAggregateInputType
		_min?: AccountMinAggregateInputType
		_max?: AccountMaxAggregateInputType
	}

	export type AccountGroupByOutputType = {
		id: bigint
		userId: bigint
		type: string
		provider: string
		providerAccountId: string
		refreshToken: string | null
		access_token: string | null
		expires_at: number | null
		token_type: string | null
		scope: string | null
		id_token: string | null
		session_state: string | null
		_count: AccountCountAggregateOutputType | null
		_avg: AccountAvgAggregateOutputType | null
		_sum: AccountSumAggregateOutputType | null
		_min: AccountMinAggregateOutputType | null
		_max: AccountMaxAggregateOutputType | null
	}

	type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<AccountGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof AccountGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], AccountGroupByOutputType[P]>
						: GetScalarType<T[P], AccountGroupByOutputType[P]>
				}
			>
		>

	export type AccountSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			userId?: boolean
			type?: boolean
			provider?: boolean
			providerAccountId?: boolean
			refreshToken?: boolean
			access_token?: boolean
			expires_at?: boolean
			token_type?: boolean
			scope?: boolean
			id_token?: boolean
			session_state?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs["result"]["account"]
	>

	export type AccountSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			userId?: boolean
			type?: boolean
			provider?: boolean
			providerAccountId?: boolean
			refreshToken?: boolean
			access_token?: boolean
			expires_at?: boolean
			token_type?: boolean
			scope?: boolean
			id_token?: boolean
			session_state?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs["result"]["account"]
	>

	export type AccountSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			userId?: boolean
			type?: boolean
			provider?: boolean
			providerAccountId?: boolean
			refreshToken?: boolean
			access_token?: boolean
			expires_at?: boolean
			token_type?: boolean
			scope?: boolean
			id_token?: boolean
			session_state?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs["result"]["account"]
	>

	export type AccountSelectScalar = {
		id?: boolean
		userId?: boolean
		type?: boolean
		provider?: boolean
		providerAccountId?: boolean
		refreshToken?: boolean
		access_token?: boolean
		expires_at?: boolean
		token_type?: boolean
		scope?: boolean
		id_token?: boolean
		session_state?: boolean
	}

	export type AccountOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "id"
		| "userId"
		| "type"
		| "provider"
		| "providerAccountId"
		| "refreshToken"
		| "access_token"
		| "expires_at"
		| "token_type"
		| "scope"
		| "id_token"
		| "session_state",
		ExtArgs["result"]["account"]
	>
	export type AccountInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export type AccountIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export type AccountIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}

	export type $AccountPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Account"
		objects: {
			user: Prisma.$UserPayload<ExtArgs>
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: bigint
				userId: bigint
				type: string
				provider: string
				providerAccountId: string
				refreshToken: string | null
				access_token: string | null
				expires_at: number | null
				token_type: string | null
				scope: string | null
				id_token: string | null
				session_state: string | null
			},
			ExtArgs["result"]["account"]
		>
		composites: {}
	}

	type AccountGetPayload<
		S extends boolean | null | undefined | AccountDefaultArgs,
	> = $Result.GetResult<Prisma.$AccountPayload, S>

	type AccountCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<AccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: AccountCountAggregateInputType | true
	}

	export interface AccountDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Account"]
			meta: { name: "Account" }
		}
		/**
		 * Find zero or one Account that matches the filter.
		 * @param {AccountFindUniqueArgs} args - Arguments to find a Account
		 * @example
		 * // Get one Account
		 * const account = await prisma.account.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends AccountFindUniqueArgs>(
			args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one Account that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
		 * @example
		 * // Get one Account
		 * const account = await prisma.account.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
			args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Account that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountFindFirstArgs} args - Arguments to find a Account
		 * @example
		 * // Get one Account
		 * const account = await prisma.account.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends AccountFindFirstArgs>(
			args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Account that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
		 * @example
		 * // Get one Account
		 * const account = await prisma.account.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
			args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more Accounts that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Accounts
		 * const accounts = await prisma.account.findMany()
		 *
		 * // Get first 10 Accounts
		 * const accounts = await prisma.account.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends AccountFindManyArgs>(
			args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>

		/**
		 * Create a Account.
		 * @param {AccountCreateArgs} args - Arguments to create a Account.
		 * @example
		 * // Create one Account
		 * const Account = await prisma.account.create({
		 *   data: {
		 *     // ... data to create a Account
		 *   }
		 * })
		 *
		 */
		create<T extends AccountCreateArgs>(
			args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many Accounts.
		 * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
		 * @example
		 * // Create many Accounts
		 * const account = await prisma.account.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends AccountCreateManyArgs>(
			args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Accounts and returns the data saved in the database.
		 * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
		 * @example
		 * // Create many Accounts
		 * const account = await prisma.account.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Accounts and only return the `id`
		 * const accountWithIdOnly = await prisma.account.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(
			args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Delete a Account.
		 * @param {AccountDeleteArgs} args - Arguments to delete one Account.
		 * @example
		 * // Delete one Account
		 * const Account = await prisma.account.delete({
		 *   where: {
		 *     // ... filter to delete one Account
		 *   }
		 * })
		 *
		 */
		delete<T extends AccountDeleteArgs>(
			args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Update one Account.
		 * @param {AccountUpdateArgs} args - Arguments to update one Account.
		 * @example
		 * // Update one Account
		 * const account = await prisma.account.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends AccountUpdateArgs>(
			args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Delete zero or more Accounts.
		 * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
		 * @example
		 * // Delete a few Accounts
		 * const { count } = await prisma.account.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends AccountDeleteManyArgs>(
			args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Accounts.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Accounts
		 * const account = await prisma.account.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends AccountUpdateManyArgs>(
			args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Accounts and returns the data updated in the database.
		 * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
		 * @example
		 * // Update many Accounts
		 * const account = await prisma.account.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Accounts and only return the `id`
		 * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
		updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(
			args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Create or update one Account.
		 * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
		 * @example
		 * // Update or create a Account
		 * const account = await prisma.account.upsert({
		 *   create: {
		 *     // ... data to create a Account
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Account we want to update
		 *   }
		 * })
		 */
		upsert<T extends AccountUpsertArgs>(
			args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
		): Prisma__AccountClient<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Count the number of Accounts.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
		 * @example
		 * // Count the number of Accounts
		 * const count = await prisma.account.count({
		 *   where: {
		 *     // ... the filter for the Accounts we want to count
		 *   }
		 * })
		 **/
		count<T extends AccountCountArgs>(
			args?: Subset<T, AccountCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], AccountCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a Account.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends AccountAggregateArgs>(
			args: Subset<T, AccountAggregateArgs>,
		): Prisma.PrismaPromise<GetAccountAggregateType<T>>

		/**
		 * Group by Account.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountGroupByArgs} args - Group by arguments.
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
			T extends AccountGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: AccountGroupByArgs["orderBy"] }
				: { orderBy?: AccountGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										]
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetAccountGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Account model
		 */
		readonly fields: AccountFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Account.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__AccountClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise"
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>,
		): Prisma__UserClient<
			| $Result.GetResult<
					Prisma.$UserPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Account model
	 */
	interface AccountFieldRefs {
		readonly id: FieldRef<"Account", "BigInt">
		readonly userId: FieldRef<"Account", "BigInt">
		readonly type: FieldRef<"Account", "String">
		readonly provider: FieldRef<"Account", "String">
		readonly providerAccountId: FieldRef<"Account", "String">
		readonly refreshToken: FieldRef<"Account", "String">
		readonly access_token: FieldRef<"Account", "String">
		readonly expires_at: FieldRef<"Account", "Int">
		readonly token_type: FieldRef<"Account", "String">
		readonly scope: FieldRef<"Account", "String">
		readonly id_token: FieldRef<"Account", "String">
		readonly session_state: FieldRef<"Account", "String">
	}

	// Custom InputTypes
	/**
	 * Account findUnique
	 */
	export type AccountFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account findUniqueOrThrow
	 */
	export type AccountFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account findFirst
	 */
	export type AccountFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?:
			| AccountOrderByWithRelationInput
			| AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Accounts.
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Accounts.
		 */
		distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
	}

	/**
	 * Account findFirstOrThrow
	 */
	export type AccountFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?:
			| AccountOrderByWithRelationInput
			| AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Accounts.
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Accounts.
		 */
		distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
	}

	/**
	 * Account findMany
	 */
	export type AccountFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * Filter, which Accounts to fetch.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?:
			| AccountOrderByWithRelationInput
			| AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Accounts.
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
	}

	/**
	 * Account create
	 */
	export type AccountCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * The data needed to create a Account.
		 */
		data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
	}

	/**
	 * Account createMany
	 */
	export type AccountCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Accounts.
		 */
		data: AccountCreateManyInput | AccountCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Account createManyAndReturn
	 */
	export type AccountCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * The data used to create many Accounts.
		 */
		data: AccountCreateManyInput | AccountCreateManyInput[]
		skipDuplicates?: boolean
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Account update
	 */
	export type AccountUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * The data needed to update a Account.
		 */
		data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
		/**
		 * Choose, which Account to update.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account updateMany
	 */
	export type AccountUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Accounts.
		 */
		data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
		/**
		 * Filter which Accounts to update
		 */
		where?: AccountWhereInput
		/**
		 * Limit how many Accounts to update.
		 */
		limit?: number
	}

	/**
	 * Account updateManyAndReturn
	 */
	export type AccountUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * The data used to update Accounts.
		 */
		data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
		/**
		 * Filter which Accounts to update
		 */
		where?: AccountWhereInput
		/**
		 * Limit how many Accounts to update.
		 */
		limit?: number
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Account upsert
	 */
	export type AccountUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * The filter to search for the Account to update in case it exists.
		 */
		where: AccountWhereUniqueInput
		/**
		 * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
		 */
		create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
		/**
		 * In case the Account was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
	}

	/**
	 * Account delete
	 */
	export type AccountDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
		/**
		 * Filter which Account to delete.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account deleteMany
	 */
	export type AccountDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Accounts to delete
		 */
		where?: AccountWhereInput
		/**
		 * Limit how many Accounts to delete.
		 */
		limit?: number
	}

	/**
	 * Account without action
	 */
	export type AccountDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: AccountInclude<ExtArgs> | null
	}

	/**
	 * Model VerificationToken
	 */

	export type AggregateVerificationToken = {
		_count: VerificationTokenCountAggregateOutputType | null
		_min: VerificationTokenMinAggregateOutputType | null
		_max: VerificationTokenMaxAggregateOutputType | null
	}

	export type VerificationTokenMinAggregateOutputType = {
		identifier: string | null
		token: string | null
		expires: Date | null
	}

	export type VerificationTokenMaxAggregateOutputType = {
		identifier: string | null
		token: string | null
		expires: Date | null
	}

	export type VerificationTokenCountAggregateOutputType = {
		identifier: number
		token: number
		expires: number
		_all: number
	}

	export type VerificationTokenMinAggregateInputType = {
		identifier?: true
		token?: true
		expires?: true
	}

	export type VerificationTokenMaxAggregateInputType = {
		identifier?: true
		token?: true
		expires?: true
	}

	export type VerificationTokenCountAggregateInputType = {
		identifier?: true
		token?: true
		expires?: true
		_all?: true
	}

	export type VerificationTokenAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which VerificationToken to aggregate.
		 */
		where?: VerificationTokenWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of VerificationTokens to fetch.
		 */
		orderBy?:
			| VerificationTokenOrderByWithRelationInput
			| VerificationTokenOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: VerificationTokenWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` VerificationTokens from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` VerificationTokens.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned VerificationTokens
		 **/
		_count?: true | VerificationTokenCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: VerificationTokenMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: VerificationTokenMaxAggregateInputType
	}

	export type GetVerificationTokenAggregateType<
		T extends VerificationTokenAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateVerificationToken]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateVerificationToken[P]>
			: GetScalarType<T[P], AggregateVerificationToken[P]>
	}

	export type VerificationTokenGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: VerificationTokenWhereInput
		orderBy?:
			| VerificationTokenOrderByWithAggregationInput
			| VerificationTokenOrderByWithAggregationInput[]
		by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
		having?: VerificationTokenScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: VerificationTokenCountAggregateInputType | true
		_min?: VerificationTokenMinAggregateInputType
		_max?: VerificationTokenMaxAggregateInputType
	}

	export type VerificationTokenGroupByOutputType = {
		identifier: string
		token: string
		expires: Date
		_count: VerificationTokenCountAggregateOutputType | null
		_min: VerificationTokenMinAggregateOutputType | null
		_max: VerificationTokenMaxAggregateOutputType | null
	}

	type GetVerificationTokenGroupByPayload<
		T extends VerificationTokenGroupByArgs,
	> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<VerificationTokenGroupByOutputType, T["by"]> & {
				[P in keyof T &
					keyof VerificationTokenGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
					: GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
			}
		>
	>

	export type VerificationTokenSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			identifier?: boolean
			token?: boolean
			expires?: boolean
		},
		ExtArgs["result"]["verificationToken"]
	>

	export type VerificationTokenSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			identifier?: boolean
			token?: boolean
			expires?: boolean
		},
		ExtArgs["result"]["verificationToken"]
	>

	export type VerificationTokenSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			identifier?: boolean
			token?: boolean
			expires?: boolean
		},
		ExtArgs["result"]["verificationToken"]
	>

	export type VerificationTokenSelectScalar = {
		identifier?: boolean
		token?: boolean
		expires?: boolean
	}

	export type VerificationTokenOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"identifier" | "token" | "expires",
		ExtArgs["result"]["verificationToken"]
	>

	export type $VerificationTokenPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "VerificationToken"
		objects: {}
		scalars: $Extensions.GetPayloadResult<
			{
				identifier: string
				token: string
				expires: Date
			},
			ExtArgs["result"]["verificationToken"]
		>
		composites: {}
	}

	type VerificationTokenGetPayload<
		S extends boolean | null | undefined | VerificationTokenDefaultArgs,
	> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

	type VerificationTokenCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		VerificationTokenFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: VerificationTokenCountAggregateInputType | true
	}

	export interface VerificationTokenDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["VerificationToken"]
			meta: { name: "VerificationToken" }
		}
		/**
		 * Find zero or one VerificationToken that matches the filter.
		 * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
		 * @example
		 * // Get one VerificationToken
		 * const verificationToken = await prisma.verificationToken.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends VerificationTokenFindUniqueArgs>(
			args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
		 * @example
		 * // Get one VerificationToken
		 * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
			args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first VerificationToken that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
		 * @example
		 * // Get one VerificationToken
		 * const verificationToken = await prisma.verificationToken.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends VerificationTokenFindFirstArgs>(
			args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first VerificationToken that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
		 * @example
		 * // Get one VerificationToken
		 * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
			args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more VerificationTokens that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all VerificationTokens
		 * const verificationTokens = await prisma.verificationToken.findMany()
		 *
		 * // Get first 10 VerificationTokens
		 * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
		 *
		 * // Only select the `identifier`
		 * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
		 *
		 */
		findMany<T extends VerificationTokenFindManyArgs>(
			args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>

		/**
		 * Create a VerificationToken.
		 * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
		 * @example
		 * // Create one VerificationToken
		 * const VerificationToken = await prisma.verificationToken.create({
		 *   data: {
		 *     // ... data to create a VerificationToken
		 *   }
		 * })
		 *
		 */
		create<T extends VerificationTokenCreateArgs>(
			args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many VerificationTokens.
		 * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
		 * @example
		 * // Create many VerificationTokens
		 * const verificationToken = await prisma.verificationToken.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends VerificationTokenCreateManyArgs>(
			args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many VerificationTokens and returns the data saved in the database.
		 * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
		 * @example
		 * // Create many VerificationTokens
		 * const verificationToken = await prisma.verificationToken.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many VerificationTokens and only return the `identifier`
		 * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
		 *   select: { identifier: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(
			args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Delete a VerificationToken.
		 * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
		 * @example
		 * // Delete one VerificationToken
		 * const VerificationToken = await prisma.verificationToken.delete({
		 *   where: {
		 *     // ... filter to delete one VerificationToken
		 *   }
		 * })
		 *
		 */
		delete<T extends VerificationTokenDeleteArgs>(
			args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Update one VerificationToken.
		 * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
		 * @example
		 * // Update one VerificationToken
		 * const verificationToken = await prisma.verificationToken.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends VerificationTokenUpdateArgs>(
			args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Delete zero or more VerificationTokens.
		 * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
		 * @example
		 * // Delete a few VerificationTokens
		 * const { count } = await prisma.verificationToken.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends VerificationTokenDeleteManyArgs>(
			args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more VerificationTokens.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many VerificationTokens
		 * const verificationToken = await prisma.verificationToken.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends VerificationTokenUpdateManyArgs>(
			args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more VerificationTokens and returns the data updated in the database.
		 * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
		 * @example
		 * // Update many VerificationTokens
		 * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more VerificationTokens and only return the `identifier`
		 * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
		 *   select: { identifier: true },
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
		updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(
			args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>

		/**
		 * Create or update one VerificationToken.
		 * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
		 * @example
		 * // Update or create a VerificationToken
		 * const verificationToken = await prisma.verificationToken.upsert({
		 *   create: {
		 *     // ... data to create a VerificationToken
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the VerificationToken we want to update
		 *   }
		 * })
		 */
		upsert<T extends VerificationTokenUpsertArgs>(
			args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>,
		): Prisma__VerificationTokenClient<
			$Result.GetResult<
				Prisma.$VerificationTokenPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Count the number of VerificationTokens.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
		 * @example
		 * // Count the number of VerificationTokens
		 * const count = await prisma.verificationToken.count({
		 *   where: {
		 *     // ... the filter for the VerificationTokens we want to count
		 *   }
		 * })
		 **/
		count<T extends VerificationTokenCountArgs>(
			args?: Subset<T, VerificationTokenCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							VerificationTokenCountAggregateOutputType
						>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a VerificationToken.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends VerificationTokenAggregateArgs>(
			args: Subset<T, VerificationTokenAggregateArgs>,
		): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

		/**
		 * Group by VerificationToken.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
			T extends VerificationTokenGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: VerificationTokenGroupByArgs["orderBy"] }
				: { orderBy?: VerificationTokenGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										]
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetVerificationTokenGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the VerificationToken model
		 */
		readonly fields: VerificationTokenFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for VerificationToken.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__VerificationTokenClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise"
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the VerificationToken model
	 */
	interface VerificationTokenFieldRefs {
		readonly identifier: FieldRef<"VerificationToken", "String">
		readonly token: FieldRef<"VerificationToken", "String">
		readonly expires: FieldRef<"VerificationToken", "DateTime">
	}

	// Custom InputTypes
	/**
	 * VerificationToken findUnique
	 */
	export type VerificationTokenFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * Filter, which VerificationToken to fetch.
		 */
		where: VerificationTokenWhereUniqueInput
	}

	/**
	 * VerificationToken findUniqueOrThrow
	 */
	export type VerificationTokenFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * Filter, which VerificationToken to fetch.
		 */
		where: VerificationTokenWhereUniqueInput
	}

	/**
	 * VerificationToken findFirst
	 */
	export type VerificationTokenFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * Filter, which VerificationToken to fetch.
		 */
		where?: VerificationTokenWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of VerificationTokens to fetch.
		 */
		orderBy?:
			| VerificationTokenOrderByWithRelationInput
			| VerificationTokenOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for VerificationTokens.
		 */
		cursor?: VerificationTokenWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` VerificationTokens from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` VerificationTokens.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of VerificationTokens.
		 */
		distinct?:
			| VerificationTokenScalarFieldEnum
			| VerificationTokenScalarFieldEnum[]
	}

	/**
	 * VerificationToken findFirstOrThrow
	 */
	export type VerificationTokenFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * Filter, which VerificationToken to fetch.
		 */
		where?: VerificationTokenWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of VerificationTokens to fetch.
		 */
		orderBy?:
			| VerificationTokenOrderByWithRelationInput
			| VerificationTokenOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for VerificationTokens.
		 */
		cursor?: VerificationTokenWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` VerificationTokens from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` VerificationTokens.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of VerificationTokens.
		 */
		distinct?:
			| VerificationTokenScalarFieldEnum
			| VerificationTokenScalarFieldEnum[]
	}

	/**
	 * VerificationToken findMany
	 */
	export type VerificationTokenFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * Filter, which VerificationTokens to fetch.
		 */
		where?: VerificationTokenWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of VerificationTokens to fetch.
		 */
		orderBy?:
			| VerificationTokenOrderByWithRelationInput
			| VerificationTokenOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing VerificationTokens.
		 */
		cursor?: VerificationTokenWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` VerificationTokens from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` VerificationTokens.
		 */
		skip?: number
		distinct?:
			| VerificationTokenScalarFieldEnum
			| VerificationTokenScalarFieldEnum[]
	}

	/**
	 * VerificationToken create
	 */
	export type VerificationTokenCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * The data needed to create a VerificationToken.
		 */
		data: XOR<
			VerificationTokenCreateInput,
			VerificationTokenUncheckedCreateInput
		>
	}

	/**
	 * VerificationToken createMany
	 */
	export type VerificationTokenCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many VerificationTokens.
		 */
		data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * VerificationToken createManyAndReturn
	 */
	export type VerificationTokenCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * The data used to create many VerificationTokens.
		 */
		data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * VerificationToken update
	 */
	export type VerificationTokenUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * The data needed to update a VerificationToken.
		 */
		data: XOR<
			VerificationTokenUpdateInput,
			VerificationTokenUncheckedUpdateInput
		>
		/**
		 * Choose, which VerificationToken to update.
		 */
		where: VerificationTokenWhereUniqueInput
	}

	/**
	 * VerificationToken updateMany
	 */
	export type VerificationTokenUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update VerificationTokens.
		 */
		data: XOR<
			VerificationTokenUpdateManyMutationInput,
			VerificationTokenUncheckedUpdateManyInput
		>
		/**
		 * Filter which VerificationTokens to update
		 */
		where?: VerificationTokenWhereInput
		/**
		 * Limit how many VerificationTokens to update.
		 */
		limit?: number
	}

	/**
	 * VerificationToken updateManyAndReturn
	 */
	export type VerificationTokenUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * The data used to update VerificationTokens.
		 */
		data: XOR<
			VerificationTokenUpdateManyMutationInput,
			VerificationTokenUncheckedUpdateManyInput
		>
		/**
		 * Filter which VerificationTokens to update
		 */
		where?: VerificationTokenWhereInput
		/**
		 * Limit how many VerificationTokens to update.
		 */
		limit?: number
	}

	/**
	 * VerificationToken upsert
	 */
	export type VerificationTokenUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * The filter to search for the VerificationToken to update in case it exists.
		 */
		where: VerificationTokenWhereUniqueInput
		/**
		 * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
		 */
		create: XOR<
			VerificationTokenCreateInput,
			VerificationTokenUncheckedCreateInput
		>
		/**
		 * In case the VerificationToken was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<
			VerificationTokenUpdateInput,
			VerificationTokenUncheckedUpdateInput
		>
	}

	/**
	 * VerificationToken delete
	 */
	export type VerificationTokenDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
		/**
		 * Filter which VerificationToken to delete.
		 */
		where: VerificationTokenWhereUniqueInput
	}

	/**
	 * VerificationToken deleteMany
	 */
	export type VerificationTokenDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which VerificationTokens to delete
		 */
		where?: VerificationTokenWhereInput
		/**
		 * Limit how many VerificationTokens to delete.
		 */
		limit?: number
	}

	/**
	 * VerificationToken without action
	 */
	export type VerificationTokenDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the VerificationToken
		 */
		select?: VerificationTokenSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the VerificationToken
		 */
		omit?: VerificationTokenOmit<ExtArgs> | null
	}

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: "ReadUncommitted"
		ReadCommitted: "ReadCommitted"
		RepeatableRead: "RepeatableRead"
		Serializable: "Serializable"
	}

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

	export const Sqlx_migrationsScalarFieldEnum: {
		version: "version"
		description: "description"
		installedOn: "installedOn"
		success: "success"
		checksum: "checksum"
		executionTime: "executionTime"
	}

	export type Sqlx_migrationsScalarFieldEnum =
		(typeof Sqlx_migrationsScalarFieldEnum)[keyof typeof Sqlx_migrationsScalarFieldEnum]

	export const ReportScalarFieldEnum: {
		id: "id"
		date: "date"
		content: "content"
		createdAt: "createdAt"
		updatedAt: "updatedAt"
		userId: "userId"
	}

	export type ReportScalarFieldEnum =
		(typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]

	export const UserScalarFieldEnum: {
		id: "id"
		name: "name"
		email: "email"
		password: "password"
		createdAt: "createdAt"
		updatedAt: "updatedAt"
		image: "image"
		emailVerified: "emailVerified"
	}

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

	export const AccountScalarFieldEnum: {
		id: "id"
		userId: "userId"
		type: "type"
		provider: "provider"
		providerAccountId: "providerAccountId"
		refreshToken: "refreshToken"
		access_token: "access_token"
		expires_at: "expires_at"
		token_type: "token_type"
		scope: "scope"
		id_token: "id_token"
		session_state: "session_state"
	}

	export type AccountScalarFieldEnum =
		(typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]

	export const VerificationTokenScalarFieldEnum: {
		identifier: "identifier"
		token: "token"
		expires: "expires"
	}

	export type VerificationTokenScalarFieldEnum =
		(typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]

	export const SortOrder: {
		asc: "asc"
		desc: "desc"
	}

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

	export const QueryMode: {
		default: "default"
		insensitive: "insensitive"
	}

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

	export const NullsOrder: {
		first: "first"
		last: "last"
	}

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'BigInt'
	 */
	export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"BigInt"
	>

	/**
	 * Reference to a field of type 'BigInt[]'
	 */
	export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"BigInt[]"
	>

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String"
	>

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String[]"
	>

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime"
	>

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime[]"
	>

	/**
	 * Reference to a field of type 'Boolean'
	 */
	export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Boolean"
	>

	/**
	 * Reference to a field of type 'Bytes'
	 */
	export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Bytes"
	>

	/**
	 * Reference to a field of type 'Bytes[]'
	 */
	export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Bytes[]"
	>

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int"
	>

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int[]"
	>

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float"
	>

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float[]"
	>

	/**
	 * Deep Input Types
	 */

	export type sqlx_migrationsWhereInput = {
		AND?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
		OR?: sqlx_migrationsWhereInput[]
		NOT?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
		version?: BigIntFilter<"sqlx_migrations"> | bigint | number
		description?: StringFilter<"sqlx_migrations"> | string
		installedOn?: DateTimeFilter<"sqlx_migrations"> | Date | string
		success?: BoolFilter<"sqlx_migrations"> | boolean
		checksum?: BytesFilter<"sqlx_migrations"> | Uint8Array
		executionTime?: BigIntFilter<"sqlx_migrations"> | bigint | number
	}

	export type sqlx_migrationsOrderByWithRelationInput = {
		version?: SortOrder
		description?: SortOrder
		installedOn?: SortOrder
		success?: SortOrder
		checksum?: SortOrder
		executionTime?: SortOrder
	}

	export type sqlx_migrationsWhereUniqueInput = Prisma.AtLeast<
		{
			version?: bigint | number
			AND?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
			OR?: sqlx_migrationsWhereInput[]
			NOT?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
			description?: StringFilter<"sqlx_migrations"> | string
			installedOn?: DateTimeFilter<"sqlx_migrations"> | Date | string
			success?: BoolFilter<"sqlx_migrations"> | boolean
			checksum?: BytesFilter<"sqlx_migrations"> | Uint8Array
			executionTime?: BigIntFilter<"sqlx_migrations"> | bigint | number
		},
		"version"
	>

	export type sqlx_migrationsOrderByWithAggregationInput = {
		version?: SortOrder
		description?: SortOrder
		installedOn?: SortOrder
		success?: SortOrder
		checksum?: SortOrder
		executionTime?: SortOrder
		_count?: sqlx_migrationsCountOrderByAggregateInput
		_avg?: sqlx_migrationsAvgOrderByAggregateInput
		_max?: sqlx_migrationsMaxOrderByAggregateInput
		_min?: sqlx_migrationsMinOrderByAggregateInput
		_sum?: sqlx_migrationsSumOrderByAggregateInput
	}

	export type sqlx_migrationsScalarWhereWithAggregatesInput = {
		AND?:
			| sqlx_migrationsScalarWhereWithAggregatesInput
			| sqlx_migrationsScalarWhereWithAggregatesInput[]
		OR?: sqlx_migrationsScalarWhereWithAggregatesInput[]
		NOT?:
			| sqlx_migrationsScalarWhereWithAggregatesInput
			| sqlx_migrationsScalarWhereWithAggregatesInput[]
		version?: BigIntWithAggregatesFilter<"sqlx_migrations"> | bigint | number
		description?: StringWithAggregatesFilter<"sqlx_migrations"> | string
		installedOn?:
			| DateTimeWithAggregatesFilter<"sqlx_migrations">
			| Date
			| string
		success?: BoolWithAggregatesFilter<"sqlx_migrations"> | boolean
		checksum?: BytesWithAggregatesFilter<"sqlx_migrations"> | Uint8Array
		executionTime?:
			| BigIntWithAggregatesFilter<"sqlx_migrations">
			| bigint
			| number
	}

	export type ReportWhereInput = {
		AND?: ReportWhereInput | ReportWhereInput[]
		OR?: ReportWhereInput[]
		NOT?: ReportWhereInput | ReportWhereInput[]
		id?: BigIntFilter<"Report"> | bigint | number
		date?: DateTimeFilter<"Report"> | Date | string
		content?: StringNullableFilter<"Report"> | string | null
		createdAt?: DateTimeFilter<"Report"> | Date | string
		updatedAt?: DateTimeFilter<"Report"> | Date | string
		userId?: BigIntFilter<"Report"> | bigint | number
		user?: XOR<UserScalarRelationFilter, UserWhereInput>
	}

	export type ReportOrderByWithRelationInput = {
		id?: SortOrder
		date?: SortOrder
		content?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		userId?: SortOrder
		user?: UserOrderByWithRelationInput
	}

	export type ReportWhereUniqueInput = Prisma.AtLeast<
		{
			id?: bigint | number
			date?: Date | string
			AND?: ReportWhereInput | ReportWhereInput[]
			OR?: ReportWhereInput[]
			NOT?: ReportWhereInput | ReportWhereInput[]
			content?: StringNullableFilter<"Report"> | string | null
			createdAt?: DateTimeFilter<"Report"> | Date | string
			updatedAt?: DateTimeFilter<"Report"> | Date | string
			userId?: BigIntFilter<"Report"> | bigint | number
			user?: XOR<UserScalarRelationFilter, UserWhereInput>
		},
		"id" | "date"
	>

	export type ReportOrderByWithAggregationInput = {
		id?: SortOrder
		date?: SortOrder
		content?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		userId?: SortOrder
		_count?: ReportCountOrderByAggregateInput
		_avg?: ReportAvgOrderByAggregateInput
		_max?: ReportMaxOrderByAggregateInput
		_min?: ReportMinOrderByAggregateInput
		_sum?: ReportSumOrderByAggregateInput
	}

	export type ReportScalarWhereWithAggregatesInput = {
		AND?:
			| ReportScalarWhereWithAggregatesInput
			| ReportScalarWhereWithAggregatesInput[]
		OR?: ReportScalarWhereWithAggregatesInput[]
		NOT?:
			| ReportScalarWhereWithAggregatesInput
			| ReportScalarWhereWithAggregatesInput[]
		id?: BigIntWithAggregatesFilter<"Report"> | bigint | number
		date?: DateTimeWithAggregatesFilter<"Report"> | Date | string
		content?: StringNullableWithAggregatesFilter<"Report"> | string | null
		createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
		userId?: BigIntWithAggregatesFilter<"Report"> | bigint | number
	}

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[]
		OR?: UserWhereInput[]
		NOT?: UserWhereInput | UserWhereInput[]
		id?: BigIntFilter<"User"> | bigint | number
		name?: StringNullableFilter<"User"> | string | null
		email?: StringFilter<"User"> | string
		password?: StringNullableFilter<"User"> | string | null
		createdAt?: DateTimeFilter<"User"> | Date | string
		updatedAt?: DateTimeFilter<"User"> | Date | string
		image?: StringNullableFilter<"User"> | string | null
		emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
		accounts?: AccountListRelationFilter
		reports?: ReportListRelationFilter
	}

	export type UserOrderByWithRelationInput = {
		id?: SortOrder
		name?: SortOrderInput | SortOrder
		email?: SortOrder
		password?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		image?: SortOrderInput | SortOrder
		emailVerified?: SortOrderInput | SortOrder
		accounts?: AccountOrderByRelationAggregateInput
		reports?: ReportOrderByRelationAggregateInput
	}

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: bigint | number
			email?: string
			AND?: UserWhereInput | UserWhereInput[]
			OR?: UserWhereInput[]
			NOT?: UserWhereInput | UserWhereInput[]
			name?: StringNullableFilter<"User"> | string | null
			password?: StringNullableFilter<"User"> | string | null
			createdAt?: DateTimeFilter<"User"> | Date | string
			updatedAt?: DateTimeFilter<"User"> | Date | string
			image?: StringNullableFilter<"User"> | string | null
			emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
			accounts?: AccountListRelationFilter
			reports?: ReportListRelationFilter
		},
		"id" | "email"
	>

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder
		name?: SortOrderInput | SortOrder
		email?: SortOrder
		password?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		image?: SortOrderInput | SortOrder
		emailVerified?: SortOrderInput | SortOrder
		_count?: UserCountOrderByAggregateInput
		_avg?: UserAvgOrderByAggregateInput
		_max?: UserMaxOrderByAggregateInput
		_min?: UserMinOrderByAggregateInput
		_sum?: UserSumOrderByAggregateInput
	}

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[]
		OR?: UserScalarWhereWithAggregatesInput[]
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[]
		id?: BigIntWithAggregatesFilter<"User"> | bigint | number
		name?: StringNullableWithAggregatesFilter<"User"> | string | null
		email?: StringWithAggregatesFilter<"User"> | string
		password?: StringNullableWithAggregatesFilter<"User"> | string | null
		createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
		image?: StringNullableWithAggregatesFilter<"User"> | string | null
		emailVerified?:
			| DateTimeNullableWithAggregatesFilter<"User">
			| Date
			| string
			| null
	}

	export type AccountWhereInput = {
		AND?: AccountWhereInput | AccountWhereInput[]
		OR?: AccountWhereInput[]
		NOT?: AccountWhereInput | AccountWhereInput[]
		id?: BigIntFilter<"Account"> | bigint | number
		userId?: BigIntFilter<"Account"> | bigint | number
		type?: StringFilter<"Account"> | string
		provider?: StringFilter<"Account"> | string
		providerAccountId?: StringFilter<"Account"> | string
		refreshToken?: StringNullableFilter<"Account"> | string | null
		access_token?: StringNullableFilter<"Account"> | string | null
		expires_at?: IntNullableFilter<"Account"> | number | null
		token_type?: StringNullableFilter<"Account"> | string | null
		scope?: StringNullableFilter<"Account"> | string | null
		id_token?: StringNullableFilter<"Account"> | string | null
		session_state?: StringNullableFilter<"Account"> | string | null
		user?: XOR<UserScalarRelationFilter, UserWhereInput>
	}

	export type AccountOrderByWithRelationInput = {
		id?: SortOrder
		userId?: SortOrder
		type?: SortOrder
		provider?: SortOrder
		providerAccountId?: SortOrder
		refreshToken?: SortOrderInput | SortOrder
		access_token?: SortOrderInput | SortOrder
		expires_at?: SortOrderInput | SortOrder
		token_type?: SortOrderInput | SortOrder
		scope?: SortOrderInput | SortOrder
		id_token?: SortOrderInput | SortOrder
		session_state?: SortOrderInput | SortOrder
		user?: UserOrderByWithRelationInput
	}

	export type AccountWhereUniqueInput = Prisma.AtLeast<
		{
			id?: bigint | number
			provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
			AND?: AccountWhereInput | AccountWhereInput[]
			OR?: AccountWhereInput[]
			NOT?: AccountWhereInput | AccountWhereInput[]
			userId?: BigIntFilter<"Account"> | bigint | number
			type?: StringFilter<"Account"> | string
			provider?: StringFilter<"Account"> | string
			providerAccountId?: StringFilter<"Account"> | string
			refreshToken?: StringNullableFilter<"Account"> | string | null
			access_token?: StringNullableFilter<"Account"> | string | null
			expires_at?: IntNullableFilter<"Account"> | number | null
			token_type?: StringNullableFilter<"Account"> | string | null
			scope?: StringNullableFilter<"Account"> | string | null
			id_token?: StringNullableFilter<"Account"> | string | null
			session_state?: StringNullableFilter<"Account"> | string | null
			user?: XOR<UserScalarRelationFilter, UserWhereInput>
		},
		"id" | "provider_providerAccountId"
	>

	export type AccountOrderByWithAggregationInput = {
		id?: SortOrder
		userId?: SortOrder
		type?: SortOrder
		provider?: SortOrder
		providerAccountId?: SortOrder
		refreshToken?: SortOrderInput | SortOrder
		access_token?: SortOrderInput | SortOrder
		expires_at?: SortOrderInput | SortOrder
		token_type?: SortOrderInput | SortOrder
		scope?: SortOrderInput | SortOrder
		id_token?: SortOrderInput | SortOrder
		session_state?: SortOrderInput | SortOrder
		_count?: AccountCountOrderByAggregateInput
		_avg?: AccountAvgOrderByAggregateInput
		_max?: AccountMaxOrderByAggregateInput
		_min?: AccountMinOrderByAggregateInput
		_sum?: AccountSumOrderByAggregateInput
	}

	export type AccountScalarWhereWithAggregatesInput = {
		AND?:
			| AccountScalarWhereWithAggregatesInput
			| AccountScalarWhereWithAggregatesInput[]
		OR?: AccountScalarWhereWithAggregatesInput[]
		NOT?:
			| AccountScalarWhereWithAggregatesInput
			| AccountScalarWhereWithAggregatesInput[]
		id?: BigIntWithAggregatesFilter<"Account"> | bigint | number
		userId?: BigIntWithAggregatesFilter<"Account"> | bigint | number
		type?: StringWithAggregatesFilter<"Account"> | string
		provider?: StringWithAggregatesFilter<"Account"> | string
		providerAccountId?: StringWithAggregatesFilter<"Account"> | string
		refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
		access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
		expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
		token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
		scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
		id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
		session_state?:
			| StringNullableWithAggregatesFilter<"Account">
			| string
			| null
	}

	export type VerificationTokenWhereInput = {
		AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
		OR?: VerificationTokenWhereInput[]
		NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
		identifier?: StringFilter<"VerificationToken"> | string
		token?: StringFilter<"VerificationToken"> | string
		expires?: DateTimeFilter<"VerificationToken"> | Date | string
	}

	export type VerificationTokenOrderByWithRelationInput = {
		identifier?: SortOrder
		token?: SortOrder
		expires?: SortOrder
	}

	export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<
		{
			identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
			AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
			OR?: VerificationTokenWhereInput[]
			NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
			identifier?: StringFilter<"VerificationToken"> | string
			token?: StringFilter<"VerificationToken"> | string
			expires?: DateTimeFilter<"VerificationToken"> | Date | string
		},
		"identifier_token"
	>

	export type VerificationTokenOrderByWithAggregationInput = {
		identifier?: SortOrder
		token?: SortOrder
		expires?: SortOrder
		_count?: VerificationTokenCountOrderByAggregateInput
		_max?: VerificationTokenMaxOrderByAggregateInput
		_min?: VerificationTokenMinOrderByAggregateInput
	}

	export type VerificationTokenScalarWhereWithAggregatesInput = {
		AND?:
			| VerificationTokenScalarWhereWithAggregatesInput
			| VerificationTokenScalarWhereWithAggregatesInput[]
		OR?: VerificationTokenScalarWhereWithAggregatesInput[]
		NOT?:
			| VerificationTokenScalarWhereWithAggregatesInput
			| VerificationTokenScalarWhereWithAggregatesInput[]
		identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
		token?: StringWithAggregatesFilter<"VerificationToken"> | string
		expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
	}

	export type sqlx_migrationsCreateInput = {
		version: bigint | number
		description: string
		installedOn?: Date | string
		success: boolean
		checksum: Uint8Array
		executionTime: bigint | number
	}

	export type sqlx_migrationsUncheckedCreateInput = {
		version: bigint | number
		description: string
		installedOn?: Date | string
		success: boolean
		checksum: Uint8Array
		executionTime: bigint | number
	}

	export type sqlx_migrationsUpdateInput = {
		version?: BigIntFieldUpdateOperationsInput | bigint | number
		description?: StringFieldUpdateOperationsInput | string
		installedOn?: DateTimeFieldUpdateOperationsInput | Date | string
		success?: BoolFieldUpdateOperationsInput | boolean
		checksum?: BytesFieldUpdateOperationsInput | Uint8Array
		executionTime?: BigIntFieldUpdateOperationsInput | bigint | number
	}

	export type sqlx_migrationsUncheckedUpdateInput = {
		version?: BigIntFieldUpdateOperationsInput | bigint | number
		description?: StringFieldUpdateOperationsInput | string
		installedOn?: DateTimeFieldUpdateOperationsInput | Date | string
		success?: BoolFieldUpdateOperationsInput | boolean
		checksum?: BytesFieldUpdateOperationsInput | Uint8Array
		executionTime?: BigIntFieldUpdateOperationsInput | bigint | number
	}

	export type sqlx_migrationsCreateManyInput = {
		version: bigint | number
		description: string
		installedOn?: Date | string
		success: boolean
		checksum: Uint8Array
		executionTime: bigint | number
	}

	export type sqlx_migrationsUpdateManyMutationInput = {
		version?: BigIntFieldUpdateOperationsInput | bigint | number
		description?: StringFieldUpdateOperationsInput | string
		installedOn?: DateTimeFieldUpdateOperationsInput | Date | string
		success?: BoolFieldUpdateOperationsInput | boolean
		checksum?: BytesFieldUpdateOperationsInput | Uint8Array
		executionTime?: BigIntFieldUpdateOperationsInput | bigint | number
	}

	export type sqlx_migrationsUncheckedUpdateManyInput = {
		version?: BigIntFieldUpdateOperationsInput | bigint | number
		description?: StringFieldUpdateOperationsInput | string
		installedOn?: DateTimeFieldUpdateOperationsInput | Date | string
		success?: BoolFieldUpdateOperationsInput | boolean
		checksum?: BytesFieldUpdateOperationsInput | Uint8Array
		executionTime?: BigIntFieldUpdateOperationsInput | bigint | number
	}

	export type ReportCreateInput = {
		id?: bigint | number
		date: Date | string
		content?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		user: UserCreateNestedOneWithoutReportsInput
	}

	export type ReportUncheckedCreateInput = {
		id?: bigint | number
		date: Date | string
		content?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		userId: bigint | number
	}

	export type ReportUpdateInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		date?: DateTimeFieldUpdateOperationsInput | Date | string
		content?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		user?: UserUpdateOneRequiredWithoutReportsNestedInput
	}

	export type ReportUncheckedUpdateInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		date?: DateTimeFieldUpdateOperationsInput | Date | string
		content?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		userId?: BigIntFieldUpdateOperationsInput | bigint | number
	}

	export type ReportCreateManyInput = {
		id?: bigint | number
		date: Date | string
		content?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		userId: bigint | number
	}

	export type ReportUpdateManyMutationInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		date?: DateTimeFieldUpdateOperationsInput | Date | string
		content?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type ReportUncheckedUpdateManyInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		date?: DateTimeFieldUpdateOperationsInput | Date | string
		content?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		userId?: BigIntFieldUpdateOperationsInput | bigint | number
	}

	export type UserCreateInput = {
		id?: bigint | number
		name?: string | null
		email: string
		password?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		image?: string | null
		emailVerified?: Date | string | null
		accounts?: AccountCreateNestedManyWithoutUserInput
		reports?: ReportCreateNestedManyWithoutUserInput
	}

	export type UserUncheckedCreateInput = {
		id?: bigint | number
		name?: string | null
		email: string
		password?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		image?: string | null
		emailVerified?: Date | string | null
		accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
		reports?: ReportUncheckedCreateNestedManyWithoutUserInput
	}

	export type UserUpdateInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		accounts?: AccountUpdateManyWithoutUserNestedInput
		reports?: ReportUpdateManyWithoutUserNestedInput
	}

	export type UserUncheckedUpdateInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
		reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
	}

	export type UserCreateManyInput = {
		id?: bigint | number
		name?: string | null
		email: string
		password?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		image?: string | null
		emailVerified?: Date | string | null
	}

	export type UserUpdateManyMutationInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
	}

	export type UserUncheckedUpdateManyInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
	}

	export type AccountCreateInput = {
		id?: bigint | number
		type: string
		provider: string
		providerAccountId: string
		refreshToken?: string | null
		access_token?: string | null
		expires_at?: number | null
		token_type?: string | null
		scope?: string | null
		id_token?: string | null
		session_state?: string | null
		user: UserCreateNestedOneWithoutAccountsInput
	}

	export type AccountUncheckedCreateInput = {
		id?: bigint | number
		userId: bigint | number
		type: string
		provider: string
		providerAccountId: string
		refreshToken?: string | null
		access_token?: string | null
		expires_at?: number | null
		token_type?: string | null
		scope?: string | null
		id_token?: string | null
		session_state?: string | null
	}

	export type AccountUpdateInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		type?: StringFieldUpdateOperationsInput | string
		provider?: StringFieldUpdateOperationsInput | string
		providerAccountId?: StringFieldUpdateOperationsInput | string
		refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
		access_token?: NullableStringFieldUpdateOperationsInput | string | null
		expires_at?: NullableIntFieldUpdateOperationsInput | number | null
		token_type?: NullableStringFieldUpdateOperationsInput | string | null
		scope?: NullableStringFieldUpdateOperationsInput | string | null
		id_token?: NullableStringFieldUpdateOperationsInput | string | null
		session_state?: NullableStringFieldUpdateOperationsInput | string | null
		user?: UserUpdateOneRequiredWithoutAccountsNestedInput
	}

	export type AccountUncheckedUpdateInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		userId?: BigIntFieldUpdateOperationsInput | bigint | number
		type?: StringFieldUpdateOperationsInput | string
		provider?: StringFieldUpdateOperationsInput | string
		providerAccountId?: StringFieldUpdateOperationsInput | string
		refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
		access_token?: NullableStringFieldUpdateOperationsInput | string | null
		expires_at?: NullableIntFieldUpdateOperationsInput | number | null
		token_type?: NullableStringFieldUpdateOperationsInput | string | null
		scope?: NullableStringFieldUpdateOperationsInput | string | null
		id_token?: NullableStringFieldUpdateOperationsInput | string | null
		session_state?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type AccountCreateManyInput = {
		id?: bigint | number
		userId: bigint | number
		type: string
		provider: string
		providerAccountId: string
		refreshToken?: string | null
		access_token?: string | null
		expires_at?: number | null
		token_type?: string | null
		scope?: string | null
		id_token?: string | null
		session_state?: string | null
	}

	export type AccountUpdateManyMutationInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		type?: StringFieldUpdateOperationsInput | string
		provider?: StringFieldUpdateOperationsInput | string
		providerAccountId?: StringFieldUpdateOperationsInput | string
		refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
		access_token?: NullableStringFieldUpdateOperationsInput | string | null
		expires_at?: NullableIntFieldUpdateOperationsInput | number | null
		token_type?: NullableStringFieldUpdateOperationsInput | string | null
		scope?: NullableStringFieldUpdateOperationsInput | string | null
		id_token?: NullableStringFieldUpdateOperationsInput | string | null
		session_state?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type AccountUncheckedUpdateManyInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		userId?: BigIntFieldUpdateOperationsInput | bigint | number
		type?: StringFieldUpdateOperationsInput | string
		provider?: StringFieldUpdateOperationsInput | string
		providerAccountId?: StringFieldUpdateOperationsInput | string
		refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
		access_token?: NullableStringFieldUpdateOperationsInput | string | null
		expires_at?: NullableIntFieldUpdateOperationsInput | number | null
		token_type?: NullableStringFieldUpdateOperationsInput | string | null
		scope?: NullableStringFieldUpdateOperationsInput | string | null
		id_token?: NullableStringFieldUpdateOperationsInput | string | null
		session_state?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type VerificationTokenCreateInput = {
		identifier: string
		token: string
		expires: Date | string
	}

	export type VerificationTokenUncheckedCreateInput = {
		identifier: string
		token: string
		expires: Date | string
	}

	export type VerificationTokenUpdateInput = {
		identifier?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type VerificationTokenUncheckedUpdateInput = {
		identifier?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type VerificationTokenCreateManyInput = {
		identifier: string
		token: string
		expires: Date | string
	}

	export type VerificationTokenUpdateManyMutationInput = {
		identifier?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type VerificationTokenUncheckedUpdateManyInput = {
		identifier?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
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
		installedOn?: SortOrder
		success?: SortOrder
		checksum?: SortOrder
		executionTime?: SortOrder
	}

	export type sqlx_migrationsAvgOrderByAggregateInput = {
		version?: SortOrder
		executionTime?: SortOrder
	}

	export type sqlx_migrationsMaxOrderByAggregateInput = {
		version?: SortOrder
		description?: SortOrder
		installedOn?: SortOrder
		success?: SortOrder
		checksum?: SortOrder
		executionTime?: SortOrder
	}

	export type sqlx_migrationsMinOrderByAggregateInput = {
		version?: SortOrder
		description?: SortOrder
		installedOn?: SortOrder
		success?: SortOrder
		checksum?: SortOrder
		executionTime?: SortOrder
	}

	export type sqlx_migrationsSumOrderByAggregateInput = {
		version?: SortOrder
		executionTime?: SortOrder
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

	export type UserScalarRelationFilter = {
		is?: UserWhereInput
		isNot?: UserWhereInput
	}

	export type SortOrderInput = {
		sort: SortOrder
		nulls?: NullsOrder
	}

	export type ReportCountOrderByAggregateInput = {
		id?: SortOrder
		date?: SortOrder
		content?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		userId?: SortOrder
	}

	export type ReportAvgOrderByAggregateInput = {
		id?: SortOrder
		userId?: SortOrder
	}

	export type ReportMaxOrderByAggregateInput = {
		id?: SortOrder
		date?: SortOrder
		content?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		userId?: SortOrder
	}

	export type ReportMinOrderByAggregateInput = {
		id?: SortOrder
		date?: SortOrder
		content?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		userId?: SortOrder
	}

	export type ReportSumOrderByAggregateInput = {
		id?: SortOrder
		userId?: SortOrder
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

	export type DateTimeNullableFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
	}

	export type AccountListRelationFilter = {
		every?: AccountWhereInput
		some?: AccountWhereInput
		none?: AccountWhereInput
	}

	export type ReportListRelationFilter = {
		every?: ReportWhereInput
		some?: ReportWhereInput
		none?: ReportWhereInput
	}

	export type AccountOrderByRelationAggregateInput = {
		_count?: SortOrder
	}

	export type ReportOrderByRelationAggregateInput = {
		_count?: SortOrder
	}

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
		email?: SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		image?: SortOrder
		emailVerified?: SortOrder
	}

	export type UserAvgOrderByAggregateInput = {
		id?: SortOrder
	}

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
		email?: SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		image?: SortOrder
		emailVerified?: SortOrder
	}

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
		email?: SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		image?: SortOrder
		emailVerified?: SortOrder
	}

	export type UserSumOrderByAggregateInput = {
		id?: SortOrder
	}

	export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?:
			| NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
			| Date
			| string
			| null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedDateTimeNullableFilter<$PrismaModel>
		_max?: NestedDateTimeNullableFilter<$PrismaModel>
	}

	export type IntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableFilter<$PrismaModel> | number | null
	}

	export type AccountProviderProviderAccountIdCompoundUniqueInput = {
		provider: string
		providerAccountId: string
	}

	export type AccountCountOrderByAggregateInput = {
		id?: SortOrder
		userId?: SortOrder
		type?: SortOrder
		provider?: SortOrder
		providerAccountId?: SortOrder
		refreshToken?: SortOrder
		access_token?: SortOrder
		expires_at?: SortOrder
		token_type?: SortOrder
		scope?: SortOrder
		id_token?: SortOrder
		session_state?: SortOrder
	}

	export type AccountAvgOrderByAggregateInput = {
		id?: SortOrder
		userId?: SortOrder
		expires_at?: SortOrder
	}

	export type AccountMaxOrderByAggregateInput = {
		id?: SortOrder
		userId?: SortOrder
		type?: SortOrder
		provider?: SortOrder
		providerAccountId?: SortOrder
		refreshToken?: SortOrder
		access_token?: SortOrder
		expires_at?: SortOrder
		token_type?: SortOrder
		scope?: SortOrder
		id_token?: SortOrder
		session_state?: SortOrder
	}

	export type AccountMinOrderByAggregateInput = {
		id?: SortOrder
		userId?: SortOrder
		type?: SortOrder
		provider?: SortOrder
		providerAccountId?: SortOrder
		refreshToken?: SortOrder
		access_token?: SortOrder
		expires_at?: SortOrder
		token_type?: SortOrder
		scope?: SortOrder
		id_token?: SortOrder
		session_state?: SortOrder
	}

	export type AccountSumOrderByAggregateInput = {
		id?: SortOrder
		userId?: SortOrder
		expires_at?: SortOrder
	}

	export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_avg?: NestedFloatNullableFilter<$PrismaModel>
		_sum?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedIntNullableFilter<$PrismaModel>
		_max?: NestedIntNullableFilter<$PrismaModel>
	}

	export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
		identifier: string
		token: string
	}

	export type VerificationTokenCountOrderByAggregateInput = {
		identifier?: SortOrder
		token?: SortOrder
		expires?: SortOrder
	}

	export type VerificationTokenMaxOrderByAggregateInput = {
		identifier?: SortOrder
		token?: SortOrder
		expires?: SortOrder
	}

	export type VerificationTokenMinOrderByAggregateInput = {
		identifier?: SortOrder
		token?: SortOrder
		expires?: SortOrder
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

	export type UserCreateNestedOneWithoutReportsInput = {
		create?: XOR<
			UserCreateWithoutReportsInput,
			UserUncheckedCreateWithoutReportsInput
		>
		connectOrCreate?: UserCreateOrConnectWithoutReportsInput
		connect?: UserWhereUniqueInput
	}

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null
	}

	export type UserUpdateOneRequiredWithoutReportsNestedInput = {
		create?: XOR<
			UserCreateWithoutReportsInput,
			UserUncheckedCreateWithoutReportsInput
		>
		connectOrCreate?: UserCreateOrConnectWithoutReportsInput
		upsert?: UserUpsertWithoutReportsInput
		connect?: UserWhereUniqueInput
		update?: XOR<
			XOR<
				UserUpdateToOneWithWhereWithoutReportsInput,
				UserUpdateWithoutReportsInput
			>,
			UserUncheckedUpdateWithoutReportsInput
		>
	}

	export type AccountCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<
					AccountCreateWithoutUserInput,
					AccountUncheckedCreateWithoutUserInput
			  >
			| AccountCreateWithoutUserInput[]
			| AccountUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| AccountCreateOrConnectWithoutUserInput
			| AccountCreateOrConnectWithoutUserInput[]
		createMany?: AccountCreateManyUserInputEnvelope
		connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
	}

	export type ReportCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
			| ReportCreateWithoutUserInput[]
			| ReportUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| ReportCreateOrConnectWithoutUserInput
			| ReportCreateOrConnectWithoutUserInput[]
		createMany?: ReportCreateManyUserInputEnvelope
		connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
	}

	export type AccountUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<
					AccountCreateWithoutUserInput,
					AccountUncheckedCreateWithoutUserInput
			  >
			| AccountCreateWithoutUserInput[]
			| AccountUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| AccountCreateOrConnectWithoutUserInput
			| AccountCreateOrConnectWithoutUserInput[]
		createMany?: AccountCreateManyUserInputEnvelope
		connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
	}

	export type ReportUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
			| ReportCreateWithoutUserInput[]
			| ReportUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| ReportCreateOrConnectWithoutUserInput
			| ReportCreateOrConnectWithoutUserInput[]
		createMany?: ReportCreateManyUserInputEnvelope
		connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
	}

	export type NullableDateTimeFieldUpdateOperationsInput = {
		set?: Date | string | null
	}

	export type AccountUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<
					AccountCreateWithoutUserInput,
					AccountUncheckedCreateWithoutUserInput
			  >
			| AccountCreateWithoutUserInput[]
			| AccountUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| AccountCreateOrConnectWithoutUserInput
			| AccountCreateOrConnectWithoutUserInput[]
		upsert?:
			| AccountUpsertWithWhereUniqueWithoutUserInput
			| AccountUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: AccountCreateManyUserInputEnvelope
		set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		update?:
			| AccountUpdateWithWhereUniqueWithoutUserInput
			| AccountUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| AccountUpdateManyWithWhereWithoutUserInput
			| AccountUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
	}

	export type ReportUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
			| ReportCreateWithoutUserInput[]
			| ReportUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| ReportCreateOrConnectWithoutUserInput
			| ReportCreateOrConnectWithoutUserInput[]
		upsert?:
			| ReportUpsertWithWhereUniqueWithoutUserInput
			| ReportUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: ReportCreateManyUserInputEnvelope
		set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		update?:
			| ReportUpdateWithWhereUniqueWithoutUserInput
			| ReportUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| ReportUpdateManyWithWhereWithoutUserInput
			| ReportUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
	}

	export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<
					AccountCreateWithoutUserInput,
					AccountUncheckedCreateWithoutUserInput
			  >
			| AccountCreateWithoutUserInput[]
			| AccountUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| AccountCreateOrConnectWithoutUserInput
			| AccountCreateOrConnectWithoutUserInput[]
		upsert?:
			| AccountUpsertWithWhereUniqueWithoutUserInput
			| AccountUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: AccountCreateManyUserInputEnvelope
		set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
		update?:
			| AccountUpdateWithWhereUniqueWithoutUserInput
			| AccountUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| AccountUpdateManyWithWhereWithoutUserInput
			| AccountUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
	}

	export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
			| ReportCreateWithoutUserInput[]
			| ReportUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| ReportCreateOrConnectWithoutUserInput
			| ReportCreateOrConnectWithoutUserInput[]
		upsert?:
			| ReportUpsertWithWhereUniqueWithoutUserInput
			| ReportUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: ReportCreateManyUserInputEnvelope
		set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
		update?:
			| ReportUpdateWithWhereUniqueWithoutUserInput
			| ReportUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| ReportUpdateManyWithWhereWithoutUserInput
			| ReportUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
	}

	export type UserCreateNestedOneWithoutAccountsInput = {
		create?: XOR<
			UserCreateWithoutAccountsInput,
			UserUncheckedCreateWithoutAccountsInput
		>
		connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
		connect?: UserWhereUniqueInput
	}

	export type NullableIntFieldUpdateOperationsInput = {
		set?: number | null
		increment?: number
		decrement?: number
		multiply?: number
		divide?: number
	}

	export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
		create?: XOR<
			UserCreateWithoutAccountsInput,
			UserUncheckedCreateWithoutAccountsInput
		>
		connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
		upsert?: UserUpsertWithoutAccountsInput
		connect?: UserWhereUniqueInput
		update?: XOR<
			XOR<
				UserUpdateToOneWithWhereWithoutAccountsInput,
				UserUpdateWithoutAccountsInput
			>,
			UserUncheckedUpdateWithoutAccountsInput
		>
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

	export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
	}

	export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
		{
			equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
			in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
			notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
			lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			not?:
				| NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
				| Date
				| string
				| null
			_count?: NestedIntNullableFilter<$PrismaModel>
			_min?: NestedDateTimeNullableFilter<$PrismaModel>
			_max?: NestedDateTimeNullableFilter<$PrismaModel>
		}

	export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_avg?: NestedFloatNullableFilter<$PrismaModel>
		_sum?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedIntNullableFilter<$PrismaModel>
		_max?: NestedIntNullableFilter<$PrismaModel>
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

	export type UserCreateWithoutReportsInput = {
		id?: bigint | number
		name?: string | null
		email: string
		password?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		image?: string | null
		emailVerified?: Date | string | null
		accounts?: AccountCreateNestedManyWithoutUserInput
	}

	export type UserUncheckedCreateWithoutReportsInput = {
		id?: bigint | number
		name?: string | null
		email: string
		password?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		image?: string | null
		emailVerified?: Date | string | null
		accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
	}

	export type UserCreateOrConnectWithoutReportsInput = {
		where: UserWhereUniqueInput
		create: XOR<
			UserCreateWithoutReportsInput,
			UserUncheckedCreateWithoutReportsInput
		>
	}

	export type UserUpsertWithoutReportsInput = {
		update: XOR<
			UserUpdateWithoutReportsInput,
			UserUncheckedUpdateWithoutReportsInput
		>
		create: XOR<
			UserCreateWithoutReportsInput,
			UserUncheckedCreateWithoutReportsInput
		>
		where?: UserWhereInput
	}

	export type UserUpdateToOneWithWhereWithoutReportsInput = {
		where?: UserWhereInput
		data: XOR<
			UserUpdateWithoutReportsInput,
			UserUncheckedUpdateWithoutReportsInput
		>
	}

	export type UserUpdateWithoutReportsInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		accounts?: AccountUpdateManyWithoutUserNestedInput
	}

	export type UserUncheckedUpdateWithoutReportsInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
	}

	export type AccountCreateWithoutUserInput = {
		id?: bigint | number
		type: string
		provider: string
		providerAccountId: string
		refreshToken?: string | null
		access_token?: string | null
		expires_at?: number | null
		token_type?: string | null
		scope?: string | null
		id_token?: string | null
		session_state?: string | null
	}

	export type AccountUncheckedCreateWithoutUserInput = {
		id?: bigint | number
		type: string
		provider: string
		providerAccountId: string
		refreshToken?: string | null
		access_token?: string | null
		expires_at?: number | null
		token_type?: string | null
		scope?: string | null
		id_token?: string | null
		session_state?: string | null
	}

	export type AccountCreateOrConnectWithoutUserInput = {
		where: AccountWhereUniqueInput
		create: XOR<
			AccountCreateWithoutUserInput,
			AccountUncheckedCreateWithoutUserInput
		>
	}

	export type AccountCreateManyUserInputEnvelope = {
		data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
		skipDuplicates?: boolean
	}

	export type ReportCreateWithoutUserInput = {
		id?: bigint | number
		date: Date | string
		content?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type ReportUncheckedCreateWithoutUserInput = {
		id?: bigint | number
		date: Date | string
		content?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type ReportCreateOrConnectWithoutUserInput = {
		where: ReportWhereUniqueInput
		create: XOR<
			ReportCreateWithoutUserInput,
			ReportUncheckedCreateWithoutUserInput
		>
	}

	export type ReportCreateManyUserInputEnvelope = {
		data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
		skipDuplicates?: boolean
	}

	export type AccountUpsertWithWhereUniqueWithoutUserInput = {
		where: AccountWhereUniqueInput
		update: XOR<
			AccountUpdateWithoutUserInput,
			AccountUncheckedUpdateWithoutUserInput
		>
		create: XOR<
			AccountCreateWithoutUserInput,
			AccountUncheckedCreateWithoutUserInput
		>
	}

	export type AccountUpdateWithWhereUniqueWithoutUserInput = {
		where: AccountWhereUniqueInput
		data: XOR<
			AccountUpdateWithoutUserInput,
			AccountUncheckedUpdateWithoutUserInput
		>
	}

	export type AccountUpdateManyWithWhereWithoutUserInput = {
		where: AccountScalarWhereInput
		data: XOR<
			AccountUpdateManyMutationInput,
			AccountUncheckedUpdateManyWithoutUserInput
		>
	}

	export type AccountScalarWhereInput = {
		AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
		OR?: AccountScalarWhereInput[]
		NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
		id?: BigIntFilter<"Account"> | bigint | number
		userId?: BigIntFilter<"Account"> | bigint | number
		type?: StringFilter<"Account"> | string
		provider?: StringFilter<"Account"> | string
		providerAccountId?: StringFilter<"Account"> | string
		refreshToken?: StringNullableFilter<"Account"> | string | null
		access_token?: StringNullableFilter<"Account"> | string | null
		expires_at?: IntNullableFilter<"Account"> | number | null
		token_type?: StringNullableFilter<"Account"> | string | null
		scope?: StringNullableFilter<"Account"> | string | null
		id_token?: StringNullableFilter<"Account"> | string | null
		session_state?: StringNullableFilter<"Account"> | string | null
	}

	export type ReportUpsertWithWhereUniqueWithoutUserInput = {
		where: ReportWhereUniqueInput
		update: XOR<
			ReportUpdateWithoutUserInput,
			ReportUncheckedUpdateWithoutUserInput
		>
		create: XOR<
			ReportCreateWithoutUserInput,
			ReportUncheckedCreateWithoutUserInput
		>
	}

	export type ReportUpdateWithWhereUniqueWithoutUserInput = {
		where: ReportWhereUniqueInput
		data: XOR<
			ReportUpdateWithoutUserInput,
			ReportUncheckedUpdateWithoutUserInput
		>
	}

	export type ReportUpdateManyWithWhereWithoutUserInput = {
		where: ReportScalarWhereInput
		data: XOR<
			ReportUpdateManyMutationInput,
			ReportUncheckedUpdateManyWithoutUserInput
		>
	}

	export type ReportScalarWhereInput = {
		AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
		OR?: ReportScalarWhereInput[]
		NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
		id?: BigIntFilter<"Report"> | bigint | number
		date?: DateTimeFilter<"Report"> | Date | string
		content?: StringNullableFilter<"Report"> | string | null
		createdAt?: DateTimeFilter<"Report"> | Date | string
		updatedAt?: DateTimeFilter<"Report"> | Date | string
		userId?: BigIntFilter<"Report"> | bigint | number
	}

	export type UserCreateWithoutAccountsInput = {
		id?: bigint | number
		name?: string | null
		email: string
		password?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		image?: string | null
		emailVerified?: Date | string | null
		reports?: ReportCreateNestedManyWithoutUserInput
	}

	export type UserUncheckedCreateWithoutAccountsInput = {
		id?: bigint | number
		name?: string | null
		email: string
		password?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		image?: string | null
		emailVerified?: Date | string | null
		reports?: ReportUncheckedCreateNestedManyWithoutUserInput
	}

	export type UserCreateOrConnectWithoutAccountsInput = {
		where: UserWhereUniqueInput
		create: XOR<
			UserCreateWithoutAccountsInput,
			UserUncheckedCreateWithoutAccountsInput
		>
	}

	export type UserUpsertWithoutAccountsInput = {
		update: XOR<
			UserUpdateWithoutAccountsInput,
			UserUncheckedUpdateWithoutAccountsInput
		>
		create: XOR<
			UserCreateWithoutAccountsInput,
			UserUncheckedCreateWithoutAccountsInput
		>
		where?: UserWhereInput
	}

	export type UserUpdateToOneWithWhereWithoutAccountsInput = {
		where?: UserWhereInput
		data: XOR<
			UserUpdateWithoutAccountsInput,
			UserUncheckedUpdateWithoutAccountsInput
		>
	}

	export type UserUpdateWithoutAccountsInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		reports?: ReportUpdateManyWithoutUserNestedInput
	}

	export type UserUncheckedUpdateWithoutAccountsInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		name?: NullableStringFieldUpdateOperationsInput | string | null
		email?: StringFieldUpdateOperationsInput | string
		password?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		emailVerified?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
	}

	export type AccountCreateManyUserInput = {
		id?: bigint | number
		type: string
		provider: string
		providerAccountId: string
		refreshToken?: string | null
		access_token?: string | null
		expires_at?: number | null
		token_type?: string | null
		scope?: string | null
		id_token?: string | null
		session_state?: string | null
	}

	export type ReportCreateManyUserInput = {
		id?: bigint | number
		date: Date | string
		content?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type AccountUpdateWithoutUserInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		type?: StringFieldUpdateOperationsInput | string
		provider?: StringFieldUpdateOperationsInput | string
		providerAccountId?: StringFieldUpdateOperationsInput | string
		refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
		access_token?: NullableStringFieldUpdateOperationsInput | string | null
		expires_at?: NullableIntFieldUpdateOperationsInput | number | null
		token_type?: NullableStringFieldUpdateOperationsInput | string | null
		scope?: NullableStringFieldUpdateOperationsInput | string | null
		id_token?: NullableStringFieldUpdateOperationsInput | string | null
		session_state?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type AccountUncheckedUpdateWithoutUserInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		type?: StringFieldUpdateOperationsInput | string
		provider?: StringFieldUpdateOperationsInput | string
		providerAccountId?: StringFieldUpdateOperationsInput | string
		refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
		access_token?: NullableStringFieldUpdateOperationsInput | string | null
		expires_at?: NullableIntFieldUpdateOperationsInput | number | null
		token_type?: NullableStringFieldUpdateOperationsInput | string | null
		scope?: NullableStringFieldUpdateOperationsInput | string | null
		id_token?: NullableStringFieldUpdateOperationsInput | string | null
		session_state?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type AccountUncheckedUpdateManyWithoutUserInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		type?: StringFieldUpdateOperationsInput | string
		provider?: StringFieldUpdateOperationsInput | string
		providerAccountId?: StringFieldUpdateOperationsInput | string
		refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
		access_token?: NullableStringFieldUpdateOperationsInput | string | null
		expires_at?: NullableIntFieldUpdateOperationsInput | number | null
		token_type?: NullableStringFieldUpdateOperationsInput | string | null
		scope?: NullableStringFieldUpdateOperationsInput | string | null
		id_token?: NullableStringFieldUpdateOperationsInput | string | null
		session_state?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type ReportUpdateWithoutUserInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		date?: DateTimeFieldUpdateOperationsInput | Date | string
		content?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type ReportUncheckedUpdateWithoutUserInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		date?: DateTimeFieldUpdateOperationsInput | Date | string
		content?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type ReportUncheckedUpdateManyWithoutUserInput = {
		id?: BigIntFieldUpdateOperationsInput | bigint | number
		date?: DateTimeFieldUpdateOperationsInput | Date | string
		content?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

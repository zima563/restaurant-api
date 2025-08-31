
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductSize
 * 
 */
export type ProductSize = $Result.DefaultSelection<Prisma.$ProductSizePayload>
/**
 * Model ProductAddon
 * 
 */
export type ProductAddon = $Result.DefaultSelection<Prisma.$ProductAddonPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model CartItemAddon
 * 
 */
export type CartItemAddon = $Result.DefaultSelection<Prisma.$CartItemAddonPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderItemAddon
 * 
 */
export type OrderItemAddon = $Result.DefaultSelection<Prisma.$OrderItemAddonPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model OrderStatusLog
 * 
 */
export type OrderStatusLog = $Result.DefaultSelection<Prisma.$OrderStatusLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PasswordOtp
 * 
 */
export type PasswordOtp = $Result.DefaultSelection<Prisma.$PasswordOtpPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  PREPARING: 'PREPARING',
  ON_THE_WAY: 'ON_THE_WAY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  CREDIT_CARD: 'CREDIT_CARD',
  WALLET: 'WALLET'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const FoodType: {
  GRILLED: 'GRILLED',
  DESSERTS: 'DESSERTS',
  JUICES: 'JUICES',
  PASTA: 'PASTA',
  SEAFOOD: 'SEAFOOD',
  OTHERS: 'OTHERS'
};

export type FoodType = (typeof FoodType)[keyof typeof FoodType]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type FoodType = $Enums.FoodType

export const FoodType: typeof $Enums.FoodType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSize`: Exposes CRUD operations for the **ProductSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSizes
    * const productSizes = await prisma.productSize.findMany()
    * ```
    */
  get productSize(): Prisma.ProductSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productAddon`: Exposes CRUD operations for the **ProductAddon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAddons
    * const productAddons = await prisma.productAddon.findMany()
    * ```
    */
  get productAddon(): Prisma.ProductAddonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItemAddon`: Exposes CRUD operations for the **CartItemAddon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItemAddons
    * const cartItemAddons = await prisma.cartItemAddon.findMany()
    * ```
    */
  get cartItemAddon(): Prisma.CartItemAddonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItemAddon`: Exposes CRUD operations for the **OrderItemAddon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItemAddons
    * const orderItemAddons = await prisma.orderItemAddon.findMany()
    * ```
    */
  get orderItemAddon(): Prisma.OrderItemAddonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderStatusLog`: Exposes CRUD operations for the **OrderStatusLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderStatusLogs
    * const orderStatusLogs = await prisma.orderStatusLog.findMany()
    * ```
    */
  get orderStatusLog(): Prisma.OrderStatusLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordOtp`: Exposes CRUD operations for the **PasswordOtp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordOtps
    * const passwordOtps = await prisma.passwordOtp.findMany()
    * ```
    */
  get passwordOtp(): Prisma.PasswordOtpDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Address: 'Address',
    Category: 'Category',
    Product: 'Product',
    ProductSize: 'ProductSize',
    ProductAddon: 'ProductAddon',
    CartItem: 'CartItem',
    CartItemAddon: 'CartItemAddon',
    OrderItem: 'OrderItem',
    OrderItemAddon: 'OrderItemAddon',
    Order: 'Order',
    Review: 'Review',
    OrderStatusLog: 'OrderStatusLog',
    Notification: 'Notification',
    PasswordOtp: 'PasswordOtp'
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
      modelProps: "user" | "address" | "category" | "product" | "productSize" | "productAddon" | "cartItem" | "cartItemAddon" | "orderItem" | "orderItemAddon" | "order" | "review" | "orderStatusLog" | "notification" | "passwordOtp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductSize: {
        payload: Prisma.$ProductSizePayload<ExtArgs>
        fields: Prisma.ProductSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findFirst: {
            args: Prisma.ProductSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findMany: {
            args: Prisma.ProductSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          create: {
            args: Prisma.ProductSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          createMany: {
            args: Prisma.ProductSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          update: {
            args: Prisma.ProductSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          deleteMany: {
            args: Prisma.ProductSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          aggregate: {
            args: Prisma.ProductSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSize>
          }
          groupBy: {
            args: Prisma.ProductSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSizeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeCountAggregateOutputType> | number
          }
        }
      }
      ProductAddon: {
        payload: Prisma.$ProductAddonPayload<ExtArgs>
        fields: Prisma.ProductAddonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAddonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAddonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload>
          }
          findFirst: {
            args: Prisma.ProductAddonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAddonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload>
          }
          findMany: {
            args: Prisma.ProductAddonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload>[]
          }
          create: {
            args: Prisma.ProductAddonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload>
          }
          createMany: {
            args: Prisma.ProductAddonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductAddonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload>
          }
          update: {
            args: Prisma.ProductAddonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload>
          }
          deleteMany: {
            args: Prisma.ProductAddonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAddonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductAddonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAddonPayload>
          }
          aggregate: {
            args: Prisma.ProductAddonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductAddon>
          }
          groupBy: {
            args: Prisma.ProductAddonGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductAddonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAddonCountArgs<ExtArgs>
            result: $Utils.Optional<ProductAddonCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      CartItemAddon: {
        payload: Prisma.$CartItemAddonPayload<ExtArgs>
        fields: Prisma.CartItemAddonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemAddonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemAddonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload>
          }
          findFirst: {
            args: Prisma.CartItemAddonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemAddonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload>
          }
          findMany: {
            args: Prisma.CartItemAddonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload>[]
          }
          create: {
            args: Prisma.CartItemAddonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload>
          }
          createMany: {
            args: Prisma.CartItemAddonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartItemAddonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload>
          }
          update: {
            args: Prisma.CartItemAddonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload>
          }
          deleteMany: {
            args: Prisma.CartItemAddonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemAddonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartItemAddonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemAddonPayload>
          }
          aggregate: {
            args: Prisma.CartItemAddonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItemAddon>
          }
          groupBy: {
            args: Prisma.CartItemAddonGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemAddonGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemAddonCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemAddonCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderItemAddon: {
        payload: Prisma.$OrderItemAddonPayload<ExtArgs>
        fields: Prisma.OrderItemAddonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemAddonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemAddonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload>
          }
          findFirst: {
            args: Prisma.OrderItemAddonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemAddonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload>
          }
          findMany: {
            args: Prisma.OrderItemAddonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload>[]
          }
          create: {
            args: Prisma.OrderItemAddonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload>
          }
          createMany: {
            args: Prisma.OrderItemAddonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemAddonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload>
          }
          update: {
            args: Prisma.OrderItemAddonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemAddonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemAddonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemAddonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemAddonPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAddonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItemAddon>
          }
          groupBy: {
            args: Prisma.OrderItemAddonGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemAddonGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemAddonCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemAddonCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      OrderStatusLog: {
        payload: Prisma.$OrderStatusLogPayload<ExtArgs>
        fields: Prisma.OrderStatusLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderStatusLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderStatusLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload>
          }
          findFirst: {
            args: Prisma.OrderStatusLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderStatusLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload>
          }
          findMany: {
            args: Prisma.OrderStatusLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload>[]
          }
          create: {
            args: Prisma.OrderStatusLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload>
          }
          createMany: {
            args: Prisma.OrderStatusLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderStatusLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload>
          }
          update: {
            args: Prisma.OrderStatusLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload>
          }
          deleteMany: {
            args: Prisma.OrderStatusLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderStatusLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderStatusLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusLogPayload>
          }
          aggregate: {
            args: Prisma.OrderStatusLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderStatusLog>
          }
          groupBy: {
            args: Prisma.OrderStatusLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderStatusLogCountArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      PasswordOtp: {
        payload: Prisma.$PasswordOtpPayload<ExtArgs>
        fields: Prisma.PasswordOtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordOtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordOtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload>
          }
          findFirst: {
            args: Prisma.PasswordOtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordOtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload>
          }
          findMany: {
            args: Prisma.PasswordOtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload>[]
          }
          create: {
            args: Prisma.PasswordOtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload>
          }
          createMany: {
            args: Prisma.PasswordOtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PasswordOtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload>
          }
          update: {
            args: Prisma.PasswordOtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload>
          }
          deleteMany: {
            args: Prisma.PasswordOtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordOtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasswordOtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordOtpPayload>
          }
          aggregate: {
            args: Prisma.PasswordOtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordOtp>
          }
          groupBy: {
            args: Prisma.PasswordOtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordOtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordOtpCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordOtpCountAggregateOutputType> | number
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
    user?: UserOmit
    address?: AddressOmit
    category?: CategoryOmit
    product?: ProductOmit
    productSize?: ProductSizeOmit
    productAddon?: ProductAddonOmit
    cartItem?: CartItemOmit
    cartItemAddon?: CartItemAddonOmit
    orderItem?: OrderItemOmit
    orderItemAddon?: OrderItemAddonOmit
    order?: OrderOmit
    review?: ReviewOmit
    orderStatusLog?: OrderStatusLogOmit
    notification?: NotificationOmit
    passwordOtp?: PasswordOtpOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    addresses: number
    cartItems: number
    orders: number
    reviews: number
    Notification: number
    PasswordOtp: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
    cartItems?: boolean | UserCountOutputTypeCountCartItemsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
    PasswordOtp?: boolean | UserCountOutputTypeCountPasswordOtpArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordOtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordOtpWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    Order: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | AddressCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    sizes: number
    addons: number
    cartItems: number
    orderItems: number
    reviews: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | ProductCountOutputTypeCountSizesArgs
    addons?: boolean | ProductCountOutputTypeCountAddonsArgs
    cartItems?: boolean | ProductCountOutputTypeCountCartItemsArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAddonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAddonWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ProductSizeCountOutputType
   */

  export type ProductSizeCountOutputType = {
    CartItem: number
    OrderItem: number
  }

  export type ProductSizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CartItem?: boolean | ProductSizeCountOutputTypeCountCartItemArgs
    OrderItem?: boolean | ProductSizeCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * ProductSizeCountOutputType without action
   */
  export type ProductSizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSizeCountOutputType
     */
    select?: ProductSizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductSizeCountOutputType without action
   */
  export type ProductSizeCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ProductSizeCountOutputType without action
   */
  export type ProductSizeCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ProductAddonCountOutputType
   */

  export type ProductAddonCountOutputType = {
    CartItemAddon: number
    OrderItemAddon: number
  }

  export type ProductAddonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CartItemAddon?: boolean | ProductAddonCountOutputTypeCountCartItemAddonArgs
    OrderItemAddon?: boolean | ProductAddonCountOutputTypeCountOrderItemAddonArgs
  }

  // Custom InputTypes
  /**
   * ProductAddonCountOutputType without action
   */
  export type ProductAddonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddonCountOutputType
     */
    select?: ProductAddonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductAddonCountOutputType without action
   */
  export type ProductAddonCountOutputTypeCountCartItemAddonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemAddonWhereInput
  }

  /**
   * ProductAddonCountOutputType without action
   */
  export type ProductAddonCountOutputTypeCountOrderItemAddonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemAddonWhereInput
  }


  /**
   * Count Type CartItemCountOutputType
   */

  export type CartItemCountOutputType = {
    addons: number
  }

  export type CartItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addons?: boolean | CartItemCountOutputTypeCountAddonsArgs
  }

  // Custom InputTypes
  /**
   * CartItemCountOutputType without action
   */
  export type CartItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemCountOutputType
     */
    select?: CartItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartItemCountOutputType without action
   */
  export type CartItemCountOutputTypeCountAddonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemAddonWhereInput
  }


  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    addons: number
  }

  export type OrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addons?: boolean | OrderItemCountOutputTypeCountAddonsArgs
  }

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountAddonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemAddonWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
    OrderStatusLog: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
    OrderStatusLog?: boolean | OrderCountOutputTypeCountOrderStatusLogArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderStatusLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusLogWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    role: number
    createdAt: number
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
    phone?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
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
    id: number
    name: string
    email: string
    phone: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    addresses?: boolean | User$addressesArgs<ExtArgs>
    cartItems?: boolean | User$cartItemsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    PasswordOtp?: boolean | User$PasswordOtpArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | User$addressesArgs<ExtArgs>
    cartItems?: boolean | User$cartItemsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    PasswordOtp?: boolean | User$PasswordOtpArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      PasswordOtp: Prisma.$PasswordOtpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends User$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PasswordOtp<T extends User$PasswordOtpArgs<ExtArgs> = {}>(args?: Subset<T, User$PasswordOtpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.cartItems
   */
  export type User$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.PasswordOtp
   */
  export type User$PasswordOtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    where?: PasswordOtpWhereInput
    orderBy?: PasswordOtpOrderByWithRelationInput | PasswordOtpOrderByWithRelationInput[]
    cursor?: PasswordOtpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordOtpScalarFieldEnum | PasswordOtpScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    city: string | null
    street: string | null
    building: string | null
    floor: string | null
    apartment: string | null
    note: string | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    city: string | null
    street: string | null
    building: string | null
    floor: string | null
    apartment: string | null
    note: string | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    userId: number
    city: number
    street: number
    building: number
    floor: number
    apartment: number
    note: number
    isDefault: number
    createdAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    street?: true
    building?: true
    floor?: true
    apartment?: true
    note?: true
    isDefault?: true
    createdAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    street?: true
    building?: true
    floor?: true
    apartment?: true
    note?: true
    isDefault?: true
    createdAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    street?: true
    building?: true
    floor?: true
    apartment?: true
    note?: true
    isDefault?: true
    createdAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    userId: number
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note: string | null
    isDefault: boolean
    createdAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    city?: boolean
    street?: boolean
    building?: boolean
    floor?: boolean
    apartment?: boolean
    note?: boolean
    isDefault?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Order?: boolean | Address$OrderArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    id?: boolean
    userId?: boolean
    city?: boolean
    street?: boolean
    building?: boolean
    floor?: boolean
    apartment?: boolean
    note?: boolean
    isDefault?: boolean
    createdAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "city" | "street" | "building" | "floor" | "apartment" | "note" | "isDefault" | "createdAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Order?: boolean | Address$OrderArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      city: string
      street: string
      building: string
      floor: string
      apartment: string
      note: string | null
      isDefault: boolean
      createdAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Order<T extends Address$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Address$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly userId: FieldRef<"Address", 'Int'>
    readonly city: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly building: FieldRef<"Address", 'String'>
    readonly floor: FieldRef<"Address", 'String'>
    readonly apartment: FieldRef<"Address", 'String'>
    readonly note: FieldRef<"Address", 'String'>
    readonly isDefault: FieldRef<"Address", 'Boolean'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.Order
   */
  export type Address$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    imageUrl: string | null
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly imageUrl: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    isAvailable: boolean | null
    categoryId: number | null
    foodType: $Enums.FoodType | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    isAvailable: boolean | null
    categoryId: number | null
    foodType: $Enums.FoodType | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    isAvailable: number
    categoryId: number
    foodType: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isAvailable?: true
    categoryId?: true
    foodType?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isAvailable?: true
    categoryId?: true
    foodType?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isAvailable?: true
    categoryId?: true
    foodType?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string | null
    isAvailable: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    categoryId?: boolean
    foodType?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    addons?: boolean | Product$addonsArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    categoryId?: boolean
    foodType?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "imageUrl" | "isAvailable" | "categoryId" | "foodType" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    addons?: boolean | Product$addonsArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      sizes: Prisma.$ProductSizePayload<ExtArgs>[]
      addons: Prisma.$ProductAddonPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      price: number
      imageUrl: string | null
      isAvailable: boolean
      categoryId: number
      foodType: $Enums.FoodType
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sizes<T extends Product$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Product$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addons<T extends Product$addonsArgs<ExtArgs> = {}>(args?: Subset<T, Product$addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends Product$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly isAvailable: FieldRef<"Product", 'Boolean'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly foodType: FieldRef<"Product", 'FoodType'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.sizes
   */
  export type Product$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    cursor?: ProductSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * Product.addons
   */
  export type Product$addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    where?: ProductAddonWhereInput
    orderBy?: ProductAddonOrderByWithRelationInput | ProductAddonOrderByWithRelationInput[]
    cursor?: ProductAddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAddonScalarFieldEnum | ProductAddonScalarFieldEnum[]
  }

  /**
   * Product.cartItems
   */
  export type Product$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductSize
   */

  export type AggregateProductSize = {
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  export type ProductSizeAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
  }

  export type ProductSizeSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
  }

  export type ProductSizeMinAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    price: number | null
  }

  export type ProductSizeMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    price: number | null
  }

  export type ProductSizeCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    price: number
    _all: number
  }


  export type ProductSizeAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
  }

  export type ProductSizeSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
  }

  export type ProductSizeMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    price?: true
  }

  export type ProductSizeMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    price?: true
  }

  export type ProductSizeCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    price?: true
    _all?: true
  }

  export type ProductSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSize to aggregate.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSizes
    **/
    _count?: true | ProductSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSizeMaxAggregateInputType
  }

  export type GetProductSizeAggregateType<T extends ProductSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSize[P]>
      : GetScalarType<T[P], AggregateProductSize[P]>
  }




  export type ProductSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithAggregationInput | ProductSizeOrderByWithAggregationInput[]
    by: ProductSizeScalarFieldEnum[] | ProductSizeScalarFieldEnum
    having?: ProductSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSizeCountAggregateInputType | true
    _avg?: ProductSizeAvgAggregateInputType
    _sum?: ProductSizeSumAggregateInputType
    _min?: ProductSizeMinAggregateInputType
    _max?: ProductSizeMaxAggregateInputType
  }

  export type ProductSizeGroupByOutputType = {
    id: number
    productId: number
    name: string
    price: number
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  type GetProductSizeGroupByPayload<T extends ProductSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
        }
      >
    >


  export type ProductSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    CartItem?: boolean | ProductSize$CartItemArgs<ExtArgs>
    OrderItem?: boolean | ProductSize$OrderItemArgs<ExtArgs>
    _count?: boolean | ProductSizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>



  export type ProductSizeSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
  }

  export type ProductSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "price", ExtArgs["result"]["productSize"]>
  export type ProductSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    CartItem?: boolean | ProductSize$CartItemArgs<ExtArgs>
    OrderItem?: boolean | ProductSize$OrderItemArgs<ExtArgs>
    _count?: boolean | ProductSizeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSize"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      CartItem: Prisma.$CartItemPayload<ExtArgs>[]
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      name: string
      price: number
    }, ExtArgs["result"]["productSize"]>
    composites: {}
  }

  type ProductSizeGetPayload<S extends boolean | null | undefined | ProductSizeDefaultArgs> = $Result.GetResult<Prisma.$ProductSizePayload, S>

  type ProductSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSizeCountAggregateInputType | true
    }

  export interface ProductSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSize'], meta: { name: 'ProductSize' } }
    /**
     * Find zero or one ProductSize that matches the filter.
     * @param {ProductSizeFindUniqueArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSizeFindUniqueArgs>(args: SelectSubset<T, ProductSizeFindUniqueArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSizeFindUniqueOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSizeFindFirstArgs>(args?: SelectSubset<T, ProductSizeFindFirstArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSizes
     * const productSizes = await prisma.productSize.findMany()
     * 
     * // Get first 10 ProductSizes
     * const productSizes = await prisma.productSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSizeWithIdOnly = await prisma.productSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSizeFindManyArgs>(args?: SelectSubset<T, ProductSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSize.
     * @param {ProductSizeCreateArgs} args - Arguments to create a ProductSize.
     * @example
     * // Create one ProductSize
     * const ProductSize = await prisma.productSize.create({
     *   data: {
     *     // ... data to create a ProductSize
     *   }
     * })
     * 
     */
    create<T extends ProductSizeCreateArgs>(args: SelectSubset<T, ProductSizeCreateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSizes.
     * @param {ProductSizeCreateManyArgs} args - Arguments to create many ProductSizes.
     * @example
     * // Create many ProductSizes
     * const productSize = await prisma.productSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSizeCreateManyArgs>(args?: SelectSubset<T, ProductSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductSize.
     * @param {ProductSizeDeleteArgs} args - Arguments to delete one ProductSize.
     * @example
     * // Delete one ProductSize
     * const ProductSize = await prisma.productSize.delete({
     *   where: {
     *     // ... filter to delete one ProductSize
     *   }
     * })
     * 
     */
    delete<T extends ProductSizeDeleteArgs>(args: SelectSubset<T, ProductSizeDeleteArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSize.
     * @param {ProductSizeUpdateArgs} args - Arguments to update one ProductSize.
     * @example
     * // Update one ProductSize
     * const productSize = await prisma.productSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSizeUpdateArgs>(args: SelectSubset<T, ProductSizeUpdateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSizes.
     * @param {ProductSizeDeleteManyArgs} args - Arguments to filter ProductSizes to delete.
     * @example
     * // Delete a few ProductSizes
     * const { count } = await prisma.productSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSizeDeleteManyArgs>(args?: SelectSubset<T, ProductSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSizes
     * const productSize = await prisma.productSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSizeUpdateManyArgs>(args: SelectSubset<T, ProductSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductSize.
     * @param {ProductSizeUpsertArgs} args - Arguments to update or create a ProductSize.
     * @example
     * // Update or create a ProductSize
     * const productSize = await prisma.productSize.upsert({
     *   create: {
     *     // ... data to create a ProductSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSize we want to update
     *   }
     * })
     */
    upsert<T extends ProductSizeUpsertArgs>(args: SelectSubset<T, ProductSizeUpsertArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeCountArgs} args - Arguments to filter ProductSizes to count.
     * @example
     * // Count the number of ProductSizes
     * const count = await prisma.productSize.count({
     *   where: {
     *     // ... the filter for the ProductSizes we want to count
     *   }
     * })
    **/
    count<T extends ProductSizeCountArgs>(
      args?: Subset<T, ProductSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSizeAggregateArgs>(args: Subset<T, ProductSizeAggregateArgs>): Prisma.PrismaPromise<GetProductSizeAggregateType<T>>

    /**
     * Group by ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeGroupByArgs} args - Group by arguments.
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
      T extends ProductSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSizeGroupByArgs['orderBy'] }
        : { orderBy?: ProductSizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSize model
   */
  readonly fields: ProductSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CartItem<T extends ProductSize$CartItemArgs<ExtArgs> = {}>(args?: Subset<T, ProductSize$CartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderItem<T extends ProductSize$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, ProductSize$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductSize model
   */
  interface ProductSizeFieldRefs {
    readonly id: FieldRef<"ProductSize", 'Int'>
    readonly productId: FieldRef<"ProductSize", 'Int'>
    readonly name: FieldRef<"ProductSize", 'String'>
    readonly price: FieldRef<"ProductSize", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductSize findUnique
   */
  export type ProductSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findUniqueOrThrow
   */
  export type ProductSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findFirst
   */
  export type ProductSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findFirstOrThrow
   */
  export type ProductSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findMany
   */
  export type ProductSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSizes to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize create
   */
  export type ProductSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSize.
     */
    data: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
  }

  /**
   * ProductSize createMany
   */
  export type ProductSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSizes.
     */
    data: ProductSizeCreateManyInput | ProductSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSize update
   */
  export type ProductSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSize.
     */
    data: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
    /**
     * Choose, which ProductSize to update.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize updateMany
   */
  export type ProductSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSizes.
     */
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductSizes to update
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to update.
     */
    limit?: number
  }

  /**
   * ProductSize upsert
   */
  export type ProductSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSize to update in case it exists.
     */
    where: ProductSizeWhereUniqueInput
    /**
     * In case the ProductSize found by the `where` argument doesn't exist, create a new ProductSize with this data.
     */
    create: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
    /**
     * In case the ProductSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
  }

  /**
   * ProductSize delete
   */
  export type ProductSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter which ProductSize to delete.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize deleteMany
   */
  export type ProductSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSizes to delete
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to delete.
     */
    limit?: number
  }

  /**
   * ProductSize.CartItem
   */
  export type ProductSize$CartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * ProductSize.OrderItem
   */
  export type ProductSize$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * ProductSize without action
   */
  export type ProductSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
  }


  /**
   * Model ProductAddon
   */

  export type AggregateProductAddon = {
    _count: ProductAddonCountAggregateOutputType | null
    _avg: ProductAddonAvgAggregateOutputType | null
    _sum: ProductAddonSumAggregateOutputType | null
    _min: ProductAddonMinAggregateOutputType | null
    _max: ProductAddonMaxAggregateOutputType | null
  }

  export type ProductAddonAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
  }

  export type ProductAddonSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
  }

  export type ProductAddonMinAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    price: number | null
  }

  export type ProductAddonMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    price: number | null
  }

  export type ProductAddonCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    price: number
    _all: number
  }


  export type ProductAddonAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
  }

  export type ProductAddonSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
  }

  export type ProductAddonMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    price?: true
  }

  export type ProductAddonMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    price?: true
  }

  export type ProductAddonCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    price?: true
    _all?: true
  }

  export type ProductAddonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAddon to aggregate.
     */
    where?: ProductAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAddons to fetch.
     */
    orderBy?: ProductAddonOrderByWithRelationInput | ProductAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAddons
    **/
    _count?: true | ProductAddonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAddonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductAddonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAddonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAddonMaxAggregateInputType
  }

  export type GetProductAddonAggregateType<T extends ProductAddonAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAddon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAddon[P]>
      : GetScalarType<T[P], AggregateProductAddon[P]>
  }




  export type ProductAddonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAddonWhereInput
    orderBy?: ProductAddonOrderByWithAggregationInput | ProductAddonOrderByWithAggregationInput[]
    by: ProductAddonScalarFieldEnum[] | ProductAddonScalarFieldEnum
    having?: ProductAddonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAddonCountAggregateInputType | true
    _avg?: ProductAddonAvgAggregateInputType
    _sum?: ProductAddonSumAggregateInputType
    _min?: ProductAddonMinAggregateInputType
    _max?: ProductAddonMaxAggregateInputType
  }

  export type ProductAddonGroupByOutputType = {
    id: number
    productId: number
    name: string
    price: number
    _count: ProductAddonCountAggregateOutputType | null
    _avg: ProductAddonAvgAggregateOutputType | null
    _sum: ProductAddonSumAggregateOutputType | null
    _min: ProductAddonMinAggregateOutputType | null
    _max: ProductAddonMaxAggregateOutputType | null
  }

  type GetProductAddonGroupByPayload<T extends ProductAddonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAddonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAddonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAddonGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAddonGroupByOutputType[P]>
        }
      >
    >


  export type ProductAddonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    CartItemAddon?: boolean | ProductAddon$CartItemAddonArgs<ExtArgs>
    OrderItemAddon?: boolean | ProductAddon$OrderItemAddonArgs<ExtArgs>
    _count?: boolean | ProductAddonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAddon"]>



  export type ProductAddonSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
  }

  export type ProductAddonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "price", ExtArgs["result"]["productAddon"]>
  export type ProductAddonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    CartItemAddon?: boolean | ProductAddon$CartItemAddonArgs<ExtArgs>
    OrderItemAddon?: boolean | ProductAddon$OrderItemAddonArgs<ExtArgs>
    _count?: boolean | ProductAddonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductAddonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAddon"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      CartItemAddon: Prisma.$CartItemAddonPayload<ExtArgs>[]
      OrderItemAddon: Prisma.$OrderItemAddonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      name: string
      price: number
    }, ExtArgs["result"]["productAddon"]>
    composites: {}
  }

  type ProductAddonGetPayload<S extends boolean | null | undefined | ProductAddonDefaultArgs> = $Result.GetResult<Prisma.$ProductAddonPayload, S>

  type ProductAddonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductAddonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductAddonCountAggregateInputType | true
    }

  export interface ProductAddonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAddon'], meta: { name: 'ProductAddon' } }
    /**
     * Find zero or one ProductAddon that matches the filter.
     * @param {ProductAddonFindUniqueArgs} args - Arguments to find a ProductAddon
     * @example
     * // Get one ProductAddon
     * const productAddon = await prisma.productAddon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAddonFindUniqueArgs>(args: SelectSubset<T, ProductAddonFindUniqueArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductAddon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAddonFindUniqueOrThrowArgs} args - Arguments to find a ProductAddon
     * @example
     * // Get one ProductAddon
     * const productAddon = await prisma.productAddon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAddonFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductAddonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAddon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAddonFindFirstArgs} args - Arguments to find a ProductAddon
     * @example
     * // Get one ProductAddon
     * const productAddon = await prisma.productAddon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAddonFindFirstArgs>(args?: SelectSubset<T, ProductAddonFindFirstArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAddon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAddonFindFirstOrThrowArgs} args - Arguments to find a ProductAddon
     * @example
     * // Get one ProductAddon
     * const productAddon = await prisma.productAddon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAddonFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductAddonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductAddons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAddonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAddons
     * const productAddons = await prisma.productAddon.findMany()
     * 
     * // Get first 10 ProductAddons
     * const productAddons = await prisma.productAddon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productAddonWithIdOnly = await prisma.productAddon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductAddonFindManyArgs>(args?: SelectSubset<T, ProductAddonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductAddon.
     * @param {ProductAddonCreateArgs} args - Arguments to create a ProductAddon.
     * @example
     * // Create one ProductAddon
     * const ProductAddon = await prisma.productAddon.create({
     *   data: {
     *     // ... data to create a ProductAddon
     *   }
     * })
     * 
     */
    create<T extends ProductAddonCreateArgs>(args: SelectSubset<T, ProductAddonCreateArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductAddons.
     * @param {ProductAddonCreateManyArgs} args - Arguments to create many ProductAddons.
     * @example
     * // Create many ProductAddons
     * const productAddon = await prisma.productAddon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductAddonCreateManyArgs>(args?: SelectSubset<T, ProductAddonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductAddon.
     * @param {ProductAddonDeleteArgs} args - Arguments to delete one ProductAddon.
     * @example
     * // Delete one ProductAddon
     * const ProductAddon = await prisma.productAddon.delete({
     *   where: {
     *     // ... filter to delete one ProductAddon
     *   }
     * })
     * 
     */
    delete<T extends ProductAddonDeleteArgs>(args: SelectSubset<T, ProductAddonDeleteArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductAddon.
     * @param {ProductAddonUpdateArgs} args - Arguments to update one ProductAddon.
     * @example
     * // Update one ProductAddon
     * const productAddon = await prisma.productAddon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductAddonUpdateArgs>(args: SelectSubset<T, ProductAddonUpdateArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductAddons.
     * @param {ProductAddonDeleteManyArgs} args - Arguments to filter ProductAddons to delete.
     * @example
     * // Delete a few ProductAddons
     * const { count } = await prisma.productAddon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductAddonDeleteManyArgs>(args?: SelectSubset<T, ProductAddonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAddonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAddons
     * const productAddon = await prisma.productAddon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductAddonUpdateManyArgs>(args: SelectSubset<T, ProductAddonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductAddon.
     * @param {ProductAddonUpsertArgs} args - Arguments to update or create a ProductAddon.
     * @example
     * // Update or create a ProductAddon
     * const productAddon = await prisma.productAddon.upsert({
     *   create: {
     *     // ... data to create a ProductAddon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAddon we want to update
     *   }
     * })
     */
    upsert<T extends ProductAddonUpsertArgs>(args: SelectSubset<T, ProductAddonUpsertArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAddonCountArgs} args - Arguments to filter ProductAddons to count.
     * @example
     * // Count the number of ProductAddons
     * const count = await prisma.productAddon.count({
     *   where: {
     *     // ... the filter for the ProductAddons we want to count
     *   }
     * })
    **/
    count<T extends ProductAddonCountArgs>(
      args?: Subset<T, ProductAddonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAddonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAddonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAddonAggregateArgs>(args: Subset<T, ProductAddonAggregateArgs>): Prisma.PrismaPromise<GetProductAddonAggregateType<T>>

    /**
     * Group by ProductAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAddonGroupByArgs} args - Group by arguments.
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
      T extends ProductAddonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAddonGroupByArgs['orderBy'] }
        : { orderBy?: ProductAddonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductAddonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAddonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAddon model
   */
  readonly fields: ProductAddonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAddon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAddonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CartItemAddon<T extends ProductAddon$CartItemAddonArgs<ExtArgs> = {}>(args?: Subset<T, ProductAddon$CartItemAddonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderItemAddon<T extends ProductAddon$OrderItemAddonArgs<ExtArgs> = {}>(args?: Subset<T, ProductAddon$OrderItemAddonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductAddon model
   */
  interface ProductAddonFieldRefs {
    readonly id: FieldRef<"ProductAddon", 'Int'>
    readonly productId: FieldRef<"ProductAddon", 'Int'>
    readonly name: FieldRef<"ProductAddon", 'String'>
    readonly price: FieldRef<"ProductAddon", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductAddon findUnique
   */
  export type ProductAddonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * Filter, which ProductAddon to fetch.
     */
    where: ProductAddonWhereUniqueInput
  }

  /**
   * ProductAddon findUniqueOrThrow
   */
  export type ProductAddonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * Filter, which ProductAddon to fetch.
     */
    where: ProductAddonWhereUniqueInput
  }

  /**
   * ProductAddon findFirst
   */
  export type ProductAddonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * Filter, which ProductAddon to fetch.
     */
    where?: ProductAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAddons to fetch.
     */
    orderBy?: ProductAddonOrderByWithRelationInput | ProductAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAddons.
     */
    cursor?: ProductAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAddons.
     */
    distinct?: ProductAddonScalarFieldEnum | ProductAddonScalarFieldEnum[]
  }

  /**
   * ProductAddon findFirstOrThrow
   */
  export type ProductAddonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * Filter, which ProductAddon to fetch.
     */
    where?: ProductAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAddons to fetch.
     */
    orderBy?: ProductAddonOrderByWithRelationInput | ProductAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAddons.
     */
    cursor?: ProductAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAddons.
     */
    distinct?: ProductAddonScalarFieldEnum | ProductAddonScalarFieldEnum[]
  }

  /**
   * ProductAddon findMany
   */
  export type ProductAddonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * Filter, which ProductAddons to fetch.
     */
    where?: ProductAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAddons to fetch.
     */
    orderBy?: ProductAddonOrderByWithRelationInput | ProductAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAddons.
     */
    cursor?: ProductAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAddons.
     */
    skip?: number
    distinct?: ProductAddonScalarFieldEnum | ProductAddonScalarFieldEnum[]
  }

  /**
   * ProductAddon create
   */
  export type ProductAddonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductAddon.
     */
    data: XOR<ProductAddonCreateInput, ProductAddonUncheckedCreateInput>
  }

  /**
   * ProductAddon createMany
   */
  export type ProductAddonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAddons.
     */
    data: ProductAddonCreateManyInput | ProductAddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductAddon update
   */
  export type ProductAddonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductAddon.
     */
    data: XOR<ProductAddonUpdateInput, ProductAddonUncheckedUpdateInput>
    /**
     * Choose, which ProductAddon to update.
     */
    where: ProductAddonWhereUniqueInput
  }

  /**
   * ProductAddon updateMany
   */
  export type ProductAddonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAddons.
     */
    data: XOR<ProductAddonUpdateManyMutationInput, ProductAddonUncheckedUpdateManyInput>
    /**
     * Filter which ProductAddons to update
     */
    where?: ProductAddonWhereInput
    /**
     * Limit how many ProductAddons to update.
     */
    limit?: number
  }

  /**
   * ProductAddon upsert
   */
  export type ProductAddonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductAddon to update in case it exists.
     */
    where: ProductAddonWhereUniqueInput
    /**
     * In case the ProductAddon found by the `where` argument doesn't exist, create a new ProductAddon with this data.
     */
    create: XOR<ProductAddonCreateInput, ProductAddonUncheckedCreateInput>
    /**
     * In case the ProductAddon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAddonUpdateInput, ProductAddonUncheckedUpdateInput>
  }

  /**
   * ProductAddon delete
   */
  export type ProductAddonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
    /**
     * Filter which ProductAddon to delete.
     */
    where: ProductAddonWhereUniqueInput
  }

  /**
   * ProductAddon deleteMany
   */
  export type ProductAddonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAddons to delete
     */
    where?: ProductAddonWhereInput
    /**
     * Limit how many ProductAddons to delete.
     */
    limit?: number
  }

  /**
   * ProductAddon.CartItemAddon
   */
  export type ProductAddon$CartItemAddonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    where?: CartItemAddonWhereInput
    orderBy?: CartItemAddonOrderByWithRelationInput | CartItemAddonOrderByWithRelationInput[]
    cursor?: CartItemAddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemAddonScalarFieldEnum | CartItemAddonScalarFieldEnum[]
  }

  /**
   * ProductAddon.OrderItemAddon
   */
  export type ProductAddon$OrderItemAddonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    where?: OrderItemAddonWhereInput
    orderBy?: OrderItemAddonOrderByWithRelationInput | OrderItemAddonOrderByWithRelationInput[]
    cursor?: OrderItemAddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemAddonScalarFieldEnum | OrderItemAddonScalarFieldEnum[]
  }

  /**
   * ProductAddon without action
   */
  export type ProductAddonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAddon
     */
    select?: ProductAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAddon
     */
    omit?: ProductAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAddonInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    sizeId: number
    quantity: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sizeId?: true
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sizeId?: true
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sizeId?: true
    quantity?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sizeId?: true
    quantity?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sizeId?: true
    quantity?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    userId: number
    productId: number
    sizeId: number | null
    quantity: number
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    sizeId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    size?: boolean | CartItem$sizeArgs<ExtArgs>
    addons?: boolean | CartItem$addonsArgs<ExtArgs>
    _count?: boolean | CartItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>



  export type CartItemSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    sizeId?: boolean
    quantity?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "sizeId" | "quantity", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    size?: boolean | CartItem$sizeArgs<ExtArgs>
    addons?: boolean | CartItem$addonsArgs<ExtArgs>
    _count?: boolean | CartItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      size: Prisma.$ProductSizePayload<ExtArgs> | null
      addons: Prisma.$CartItemAddonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      sizeId: number | null
      quantity: number
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    size<T extends CartItem$sizeArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$sizeArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addons<T extends CartItem$addonsArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'Int'>
    readonly userId: FieldRef<"CartItem", 'Int'>
    readonly productId: FieldRef<"CartItem", 'Int'>
    readonly sizeId: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem.size
   */
  export type CartItem$sizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
  }

  /**
   * CartItem.addons
   */
  export type CartItem$addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    where?: CartItemAddonWhereInput
    orderBy?: CartItemAddonOrderByWithRelationInput | CartItemAddonOrderByWithRelationInput[]
    cursor?: CartItemAddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemAddonScalarFieldEnum | CartItemAddonScalarFieldEnum[]
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model CartItemAddon
   */

  export type AggregateCartItemAddon = {
    _count: CartItemAddonCountAggregateOutputType | null
    _avg: CartItemAddonAvgAggregateOutputType | null
    _sum: CartItemAddonSumAggregateOutputType | null
    _min: CartItemAddonMinAggregateOutputType | null
    _max: CartItemAddonMaxAggregateOutputType | null
  }

  export type CartItemAddonAvgAggregateOutputType = {
    id: number | null
    cartItemId: number | null
    addonId: number | null
  }

  export type CartItemAddonSumAggregateOutputType = {
    id: number | null
    cartItemId: number | null
    addonId: number | null
  }

  export type CartItemAddonMinAggregateOutputType = {
    id: number | null
    cartItemId: number | null
    addonId: number | null
  }

  export type CartItemAddonMaxAggregateOutputType = {
    id: number | null
    cartItemId: number | null
    addonId: number | null
  }

  export type CartItemAddonCountAggregateOutputType = {
    id: number
    cartItemId: number
    addonId: number
    _all: number
  }


  export type CartItemAddonAvgAggregateInputType = {
    id?: true
    cartItemId?: true
    addonId?: true
  }

  export type CartItemAddonSumAggregateInputType = {
    id?: true
    cartItemId?: true
    addonId?: true
  }

  export type CartItemAddonMinAggregateInputType = {
    id?: true
    cartItemId?: true
    addonId?: true
  }

  export type CartItemAddonMaxAggregateInputType = {
    id?: true
    cartItemId?: true
    addonId?: true
  }

  export type CartItemAddonCountAggregateInputType = {
    id?: true
    cartItemId?: true
    addonId?: true
    _all?: true
  }

  export type CartItemAddonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItemAddon to aggregate.
     */
    where?: CartItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItemAddons to fetch.
     */
    orderBy?: CartItemAddonOrderByWithRelationInput | CartItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItemAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItemAddons
    **/
    _count?: true | CartItemAddonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAddonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemAddonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemAddonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemAddonMaxAggregateInputType
  }

  export type GetCartItemAddonAggregateType<T extends CartItemAddonAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItemAddon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItemAddon[P]>
      : GetScalarType<T[P], AggregateCartItemAddon[P]>
  }




  export type CartItemAddonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemAddonWhereInput
    orderBy?: CartItemAddonOrderByWithAggregationInput | CartItemAddonOrderByWithAggregationInput[]
    by: CartItemAddonScalarFieldEnum[] | CartItemAddonScalarFieldEnum
    having?: CartItemAddonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemAddonCountAggregateInputType | true
    _avg?: CartItemAddonAvgAggregateInputType
    _sum?: CartItemAddonSumAggregateInputType
    _min?: CartItemAddonMinAggregateInputType
    _max?: CartItemAddonMaxAggregateInputType
  }

  export type CartItemAddonGroupByOutputType = {
    id: number
    cartItemId: number
    addonId: number
    _count: CartItemAddonCountAggregateOutputType | null
    _avg: CartItemAddonAvgAggregateOutputType | null
    _sum: CartItemAddonSumAggregateOutputType | null
    _min: CartItemAddonMinAggregateOutputType | null
    _max: CartItemAddonMaxAggregateOutputType | null
  }

  type GetCartItemAddonGroupByPayload<T extends CartItemAddonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemAddonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemAddonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemAddonGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemAddonGroupByOutputType[P]>
        }
      >
    >


  export type CartItemAddonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartItemId?: boolean
    addonId?: boolean
    cartItem?: boolean | CartItemDefaultArgs<ExtArgs>
    addon?: boolean | ProductAddonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItemAddon"]>



  export type CartItemAddonSelectScalar = {
    id?: boolean
    cartItemId?: boolean
    addonId?: boolean
  }

  export type CartItemAddonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartItemId" | "addonId", ExtArgs["result"]["cartItemAddon"]>
  export type CartItemAddonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItem?: boolean | CartItemDefaultArgs<ExtArgs>
    addon?: boolean | ProductAddonDefaultArgs<ExtArgs>
  }

  export type $CartItemAddonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItemAddon"
    objects: {
      cartItem: Prisma.$CartItemPayload<ExtArgs>
      addon: Prisma.$ProductAddonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartItemId: number
      addonId: number
    }, ExtArgs["result"]["cartItemAddon"]>
    composites: {}
  }

  type CartItemAddonGetPayload<S extends boolean | null | undefined | CartItemAddonDefaultArgs> = $Result.GetResult<Prisma.$CartItemAddonPayload, S>

  type CartItemAddonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemAddonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemAddonCountAggregateInputType | true
    }

  export interface CartItemAddonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItemAddon'], meta: { name: 'CartItemAddon' } }
    /**
     * Find zero or one CartItemAddon that matches the filter.
     * @param {CartItemAddonFindUniqueArgs} args - Arguments to find a CartItemAddon
     * @example
     * // Get one CartItemAddon
     * const cartItemAddon = await prisma.cartItemAddon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemAddonFindUniqueArgs>(args: SelectSubset<T, CartItemAddonFindUniqueArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItemAddon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemAddonFindUniqueOrThrowArgs} args - Arguments to find a CartItemAddon
     * @example
     * // Get one CartItemAddon
     * const cartItemAddon = await prisma.cartItemAddon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemAddonFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemAddonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItemAddon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAddonFindFirstArgs} args - Arguments to find a CartItemAddon
     * @example
     * // Get one CartItemAddon
     * const cartItemAddon = await prisma.cartItemAddon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemAddonFindFirstArgs>(args?: SelectSubset<T, CartItemAddonFindFirstArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItemAddon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAddonFindFirstOrThrowArgs} args - Arguments to find a CartItemAddon
     * @example
     * // Get one CartItemAddon
     * const cartItemAddon = await prisma.cartItemAddon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemAddonFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemAddonFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItemAddons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAddonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItemAddons
     * const cartItemAddons = await prisma.cartItemAddon.findMany()
     * 
     * // Get first 10 CartItemAddons
     * const cartItemAddons = await prisma.cartItemAddon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemAddonWithIdOnly = await prisma.cartItemAddon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemAddonFindManyArgs>(args?: SelectSubset<T, CartItemAddonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItemAddon.
     * @param {CartItemAddonCreateArgs} args - Arguments to create a CartItemAddon.
     * @example
     * // Create one CartItemAddon
     * const CartItemAddon = await prisma.cartItemAddon.create({
     *   data: {
     *     // ... data to create a CartItemAddon
     *   }
     * })
     * 
     */
    create<T extends CartItemAddonCreateArgs>(args: SelectSubset<T, CartItemAddonCreateArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItemAddons.
     * @param {CartItemAddonCreateManyArgs} args - Arguments to create many CartItemAddons.
     * @example
     * // Create many CartItemAddons
     * const cartItemAddon = await prisma.cartItemAddon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemAddonCreateManyArgs>(args?: SelectSubset<T, CartItemAddonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItemAddon.
     * @param {CartItemAddonDeleteArgs} args - Arguments to delete one CartItemAddon.
     * @example
     * // Delete one CartItemAddon
     * const CartItemAddon = await prisma.cartItemAddon.delete({
     *   where: {
     *     // ... filter to delete one CartItemAddon
     *   }
     * })
     * 
     */
    delete<T extends CartItemAddonDeleteArgs>(args: SelectSubset<T, CartItemAddonDeleteArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItemAddon.
     * @param {CartItemAddonUpdateArgs} args - Arguments to update one CartItemAddon.
     * @example
     * // Update one CartItemAddon
     * const cartItemAddon = await prisma.cartItemAddon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemAddonUpdateArgs>(args: SelectSubset<T, CartItemAddonUpdateArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItemAddons.
     * @param {CartItemAddonDeleteManyArgs} args - Arguments to filter CartItemAddons to delete.
     * @example
     * // Delete a few CartItemAddons
     * const { count } = await prisma.cartItemAddon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemAddonDeleteManyArgs>(args?: SelectSubset<T, CartItemAddonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItemAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAddonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItemAddons
     * const cartItemAddon = await prisma.cartItemAddon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemAddonUpdateManyArgs>(args: SelectSubset<T, CartItemAddonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItemAddon.
     * @param {CartItemAddonUpsertArgs} args - Arguments to update or create a CartItemAddon.
     * @example
     * // Update or create a CartItemAddon
     * const cartItemAddon = await prisma.cartItemAddon.upsert({
     *   create: {
     *     // ... data to create a CartItemAddon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItemAddon we want to update
     *   }
     * })
     */
    upsert<T extends CartItemAddonUpsertArgs>(args: SelectSubset<T, CartItemAddonUpsertArgs<ExtArgs>>): Prisma__CartItemAddonClient<$Result.GetResult<Prisma.$CartItemAddonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItemAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAddonCountArgs} args - Arguments to filter CartItemAddons to count.
     * @example
     * // Count the number of CartItemAddons
     * const count = await prisma.cartItemAddon.count({
     *   where: {
     *     // ... the filter for the CartItemAddons we want to count
     *   }
     * })
    **/
    count<T extends CartItemAddonCountArgs>(
      args?: Subset<T, CartItemAddonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemAddonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItemAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAddonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAddonAggregateArgs>(args: Subset<T, CartItemAddonAggregateArgs>): Prisma.PrismaPromise<GetCartItemAddonAggregateType<T>>

    /**
     * Group by CartItemAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAddonGroupByArgs} args - Group by arguments.
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
      T extends CartItemAddonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemAddonGroupByArgs['orderBy'] }
        : { orderBy?: CartItemAddonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemAddonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemAddonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItemAddon model
   */
  readonly fields: CartItemAddonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItemAddon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemAddonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cartItem<T extends CartItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartItemDefaultArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addon<T extends ProductAddonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductAddonDefaultArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItemAddon model
   */
  interface CartItemAddonFieldRefs {
    readonly id: FieldRef<"CartItemAddon", 'Int'>
    readonly cartItemId: FieldRef<"CartItemAddon", 'Int'>
    readonly addonId: FieldRef<"CartItemAddon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartItemAddon findUnique
   */
  export type CartItemAddonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which CartItemAddon to fetch.
     */
    where: CartItemAddonWhereUniqueInput
  }

  /**
   * CartItemAddon findUniqueOrThrow
   */
  export type CartItemAddonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which CartItemAddon to fetch.
     */
    where: CartItemAddonWhereUniqueInput
  }

  /**
   * CartItemAddon findFirst
   */
  export type CartItemAddonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which CartItemAddon to fetch.
     */
    where?: CartItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItemAddons to fetch.
     */
    orderBy?: CartItemAddonOrderByWithRelationInput | CartItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItemAddons.
     */
    cursor?: CartItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItemAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItemAddons.
     */
    distinct?: CartItemAddonScalarFieldEnum | CartItemAddonScalarFieldEnum[]
  }

  /**
   * CartItemAddon findFirstOrThrow
   */
  export type CartItemAddonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which CartItemAddon to fetch.
     */
    where?: CartItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItemAddons to fetch.
     */
    orderBy?: CartItemAddonOrderByWithRelationInput | CartItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItemAddons.
     */
    cursor?: CartItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItemAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItemAddons.
     */
    distinct?: CartItemAddonScalarFieldEnum | CartItemAddonScalarFieldEnum[]
  }

  /**
   * CartItemAddon findMany
   */
  export type CartItemAddonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which CartItemAddons to fetch.
     */
    where?: CartItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItemAddons to fetch.
     */
    orderBy?: CartItemAddonOrderByWithRelationInput | CartItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItemAddons.
     */
    cursor?: CartItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItemAddons.
     */
    skip?: number
    distinct?: CartItemAddonScalarFieldEnum | CartItemAddonScalarFieldEnum[]
  }

  /**
   * CartItemAddon create
   */
  export type CartItemAddonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItemAddon.
     */
    data: XOR<CartItemAddonCreateInput, CartItemAddonUncheckedCreateInput>
  }

  /**
   * CartItemAddon createMany
   */
  export type CartItemAddonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItemAddons.
     */
    data: CartItemAddonCreateManyInput | CartItemAddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItemAddon update
   */
  export type CartItemAddonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItemAddon.
     */
    data: XOR<CartItemAddonUpdateInput, CartItemAddonUncheckedUpdateInput>
    /**
     * Choose, which CartItemAddon to update.
     */
    where: CartItemAddonWhereUniqueInput
  }

  /**
   * CartItemAddon updateMany
   */
  export type CartItemAddonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItemAddons.
     */
    data: XOR<CartItemAddonUpdateManyMutationInput, CartItemAddonUncheckedUpdateManyInput>
    /**
     * Filter which CartItemAddons to update
     */
    where?: CartItemAddonWhereInput
    /**
     * Limit how many CartItemAddons to update.
     */
    limit?: number
  }

  /**
   * CartItemAddon upsert
   */
  export type CartItemAddonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItemAddon to update in case it exists.
     */
    where: CartItemAddonWhereUniqueInput
    /**
     * In case the CartItemAddon found by the `where` argument doesn't exist, create a new CartItemAddon with this data.
     */
    create: XOR<CartItemAddonCreateInput, CartItemAddonUncheckedCreateInput>
    /**
     * In case the CartItemAddon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemAddonUpdateInput, CartItemAddonUncheckedUpdateInput>
  }

  /**
   * CartItemAddon delete
   */
  export type CartItemAddonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
    /**
     * Filter which CartItemAddon to delete.
     */
    where: CartItemAddonWhereUniqueInput
  }

  /**
   * CartItemAddon deleteMany
   */
  export type CartItemAddonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItemAddons to delete
     */
    where?: CartItemAddonWhereInput
    /**
     * Limit how many CartItemAddons to delete.
     */
    limit?: number
  }

  /**
   * CartItemAddon without action
   */
  export type CartItemAddonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemAddon
     */
    select?: CartItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItemAddon
     */
    omit?: CartItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemAddonInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    sizeId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    sizeId: number
    quantity: number
    unitPrice: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    sizeId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    sizeId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    sizeId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    sizeId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    sizeId?: true
    quantity?: true
    unitPrice?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    productId: number
    sizeId: number | null
    quantity: number
    unitPrice: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    sizeId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    size?: boolean | OrderItem$sizeArgs<ExtArgs>
    addons?: boolean | OrderItem$addonsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>



  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    sizeId?: boolean
    quantity?: boolean
    unitPrice?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "sizeId" | "quantity" | "unitPrice", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    size?: boolean | OrderItem$sizeArgs<ExtArgs>
    addons?: boolean | OrderItem$addonsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      size: Prisma.$ProductSizePayload<ExtArgs> | null
      addons: Prisma.$OrderItemAddonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number
      sizeId: number | null
      quantity: number
      unitPrice: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    size<T extends OrderItem$sizeArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$sizeArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addons<T extends OrderItem$addonsArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly productId: FieldRef<"OrderItem", 'Int'>
    readonly sizeId: FieldRef<"OrderItem", 'Int'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.size
   */
  export type OrderItem$sizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
  }

  /**
   * OrderItem.addons
   */
  export type OrderItem$addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    where?: OrderItemAddonWhereInput
    orderBy?: OrderItemAddonOrderByWithRelationInput | OrderItemAddonOrderByWithRelationInput[]
    cursor?: OrderItemAddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemAddonScalarFieldEnum | OrderItemAddonScalarFieldEnum[]
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model OrderItemAddon
   */

  export type AggregateOrderItemAddon = {
    _count: OrderItemAddonCountAggregateOutputType | null
    _avg: OrderItemAddonAvgAggregateOutputType | null
    _sum: OrderItemAddonSumAggregateOutputType | null
    _min: OrderItemAddonMinAggregateOutputType | null
    _max: OrderItemAddonMaxAggregateOutputType | null
  }

  export type OrderItemAddonAvgAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    addonId: number | null
  }

  export type OrderItemAddonSumAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    addonId: number | null
  }

  export type OrderItemAddonMinAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    addonId: number | null
  }

  export type OrderItemAddonMaxAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    addonId: number | null
  }

  export type OrderItemAddonCountAggregateOutputType = {
    id: number
    orderItemId: number
    addonId: number
    _all: number
  }


  export type OrderItemAddonAvgAggregateInputType = {
    id?: true
    orderItemId?: true
    addonId?: true
  }

  export type OrderItemAddonSumAggregateInputType = {
    id?: true
    orderItemId?: true
    addonId?: true
  }

  export type OrderItemAddonMinAggregateInputType = {
    id?: true
    orderItemId?: true
    addonId?: true
  }

  export type OrderItemAddonMaxAggregateInputType = {
    id?: true
    orderItemId?: true
    addonId?: true
  }

  export type OrderItemAddonCountAggregateInputType = {
    id?: true
    orderItemId?: true
    addonId?: true
    _all?: true
  }

  export type OrderItemAddonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemAddon to aggregate.
     */
    where?: OrderItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemAddons to fetch.
     */
    orderBy?: OrderItemAddonOrderByWithRelationInput | OrderItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItemAddons
    **/
    _count?: true | OrderItemAddonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAddonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemAddonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemAddonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemAddonMaxAggregateInputType
  }

  export type GetOrderItemAddonAggregateType<T extends OrderItemAddonAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItemAddon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItemAddon[P]>
      : GetScalarType<T[P], AggregateOrderItemAddon[P]>
  }




  export type OrderItemAddonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemAddonWhereInput
    orderBy?: OrderItemAddonOrderByWithAggregationInput | OrderItemAddonOrderByWithAggregationInput[]
    by: OrderItemAddonScalarFieldEnum[] | OrderItemAddonScalarFieldEnum
    having?: OrderItemAddonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemAddonCountAggregateInputType | true
    _avg?: OrderItemAddonAvgAggregateInputType
    _sum?: OrderItemAddonSumAggregateInputType
    _min?: OrderItemAddonMinAggregateInputType
    _max?: OrderItemAddonMaxAggregateInputType
  }

  export type OrderItemAddonGroupByOutputType = {
    id: number
    orderItemId: number
    addonId: number
    _count: OrderItemAddonCountAggregateOutputType | null
    _avg: OrderItemAddonAvgAggregateOutputType | null
    _sum: OrderItemAddonSumAggregateOutputType | null
    _min: OrderItemAddonMinAggregateOutputType | null
    _max: OrderItemAddonMaxAggregateOutputType | null
  }

  type GetOrderItemAddonGroupByPayload<T extends OrderItemAddonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemAddonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemAddonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemAddonGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemAddonGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemAddonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    addonId?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    addon?: boolean | ProductAddonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemAddon"]>



  export type OrderItemAddonSelectScalar = {
    id?: boolean
    orderItemId?: boolean
    addonId?: boolean
  }

  export type OrderItemAddonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderItemId" | "addonId", ExtArgs["result"]["orderItemAddon"]>
  export type OrderItemAddonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    addon?: boolean | ProductAddonDefaultArgs<ExtArgs>
  }

  export type $OrderItemAddonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItemAddon"
    objects: {
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
      addon: Prisma.$ProductAddonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderItemId: number
      addonId: number
    }, ExtArgs["result"]["orderItemAddon"]>
    composites: {}
  }

  type OrderItemAddonGetPayload<S extends boolean | null | undefined | OrderItemAddonDefaultArgs> = $Result.GetResult<Prisma.$OrderItemAddonPayload, S>

  type OrderItemAddonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemAddonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemAddonCountAggregateInputType | true
    }

  export interface OrderItemAddonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItemAddon'], meta: { name: 'OrderItemAddon' } }
    /**
     * Find zero or one OrderItemAddon that matches the filter.
     * @param {OrderItemAddonFindUniqueArgs} args - Arguments to find a OrderItemAddon
     * @example
     * // Get one OrderItemAddon
     * const orderItemAddon = await prisma.orderItemAddon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemAddonFindUniqueArgs>(args: SelectSubset<T, OrderItemAddonFindUniqueArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItemAddon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemAddonFindUniqueOrThrowArgs} args - Arguments to find a OrderItemAddon
     * @example
     * // Get one OrderItemAddon
     * const orderItemAddon = await prisma.orderItemAddon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemAddonFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemAddonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemAddon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAddonFindFirstArgs} args - Arguments to find a OrderItemAddon
     * @example
     * // Get one OrderItemAddon
     * const orderItemAddon = await prisma.orderItemAddon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemAddonFindFirstArgs>(args?: SelectSubset<T, OrderItemAddonFindFirstArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemAddon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAddonFindFirstOrThrowArgs} args - Arguments to find a OrderItemAddon
     * @example
     * // Get one OrderItemAddon
     * const orderItemAddon = await prisma.orderItemAddon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemAddonFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemAddonFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItemAddons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAddonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItemAddons
     * const orderItemAddons = await prisma.orderItemAddon.findMany()
     * 
     * // Get first 10 OrderItemAddons
     * const orderItemAddons = await prisma.orderItemAddon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemAddonWithIdOnly = await prisma.orderItemAddon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemAddonFindManyArgs>(args?: SelectSubset<T, OrderItemAddonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItemAddon.
     * @param {OrderItemAddonCreateArgs} args - Arguments to create a OrderItemAddon.
     * @example
     * // Create one OrderItemAddon
     * const OrderItemAddon = await prisma.orderItemAddon.create({
     *   data: {
     *     // ... data to create a OrderItemAddon
     *   }
     * })
     * 
     */
    create<T extends OrderItemAddonCreateArgs>(args: SelectSubset<T, OrderItemAddonCreateArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItemAddons.
     * @param {OrderItemAddonCreateManyArgs} args - Arguments to create many OrderItemAddons.
     * @example
     * // Create many OrderItemAddons
     * const orderItemAddon = await prisma.orderItemAddon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemAddonCreateManyArgs>(args?: SelectSubset<T, OrderItemAddonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItemAddon.
     * @param {OrderItemAddonDeleteArgs} args - Arguments to delete one OrderItemAddon.
     * @example
     * // Delete one OrderItemAddon
     * const OrderItemAddon = await prisma.orderItemAddon.delete({
     *   where: {
     *     // ... filter to delete one OrderItemAddon
     *   }
     * })
     * 
     */
    delete<T extends OrderItemAddonDeleteArgs>(args: SelectSubset<T, OrderItemAddonDeleteArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItemAddon.
     * @param {OrderItemAddonUpdateArgs} args - Arguments to update one OrderItemAddon.
     * @example
     * // Update one OrderItemAddon
     * const orderItemAddon = await prisma.orderItemAddon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemAddonUpdateArgs>(args: SelectSubset<T, OrderItemAddonUpdateArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItemAddons.
     * @param {OrderItemAddonDeleteManyArgs} args - Arguments to filter OrderItemAddons to delete.
     * @example
     * // Delete a few OrderItemAddons
     * const { count } = await prisma.orderItemAddon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemAddonDeleteManyArgs>(args?: SelectSubset<T, OrderItemAddonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAddonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItemAddons
     * const orderItemAddon = await prisma.orderItemAddon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemAddonUpdateManyArgs>(args: SelectSubset<T, OrderItemAddonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItemAddon.
     * @param {OrderItemAddonUpsertArgs} args - Arguments to update or create a OrderItemAddon.
     * @example
     * // Update or create a OrderItemAddon
     * const orderItemAddon = await prisma.orderItemAddon.upsert({
     *   create: {
     *     // ... data to create a OrderItemAddon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItemAddon we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemAddonUpsertArgs>(args: SelectSubset<T, OrderItemAddonUpsertArgs<ExtArgs>>): Prisma__OrderItemAddonClient<$Result.GetResult<Prisma.$OrderItemAddonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItemAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAddonCountArgs} args - Arguments to filter OrderItemAddons to count.
     * @example
     * // Count the number of OrderItemAddons
     * const count = await prisma.orderItemAddon.count({
     *   where: {
     *     // ... the filter for the OrderItemAddons we want to count
     *   }
     * })
    **/
    count<T extends OrderItemAddonCountArgs>(
      args?: Subset<T, OrderItemAddonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemAddonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItemAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAddonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAddonAggregateArgs>(args: Subset<T, OrderItemAddonAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAddonAggregateType<T>>

    /**
     * Group by OrderItemAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAddonGroupByArgs} args - Group by arguments.
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
      T extends OrderItemAddonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemAddonGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemAddonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemAddonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemAddonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItemAddon model
   */
  readonly fields: OrderItemAddonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItemAddon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemAddonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addon<T extends ProductAddonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductAddonDefaultArgs<ExtArgs>>): Prisma__ProductAddonClient<$Result.GetResult<Prisma.$ProductAddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItemAddon model
   */
  interface OrderItemAddonFieldRefs {
    readonly id: FieldRef<"OrderItemAddon", 'Int'>
    readonly orderItemId: FieldRef<"OrderItemAddon", 'Int'>
    readonly addonId: FieldRef<"OrderItemAddon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItemAddon findUnique
   */
  export type OrderItemAddonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemAddon to fetch.
     */
    where: OrderItemAddonWhereUniqueInput
  }

  /**
   * OrderItemAddon findUniqueOrThrow
   */
  export type OrderItemAddonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemAddon to fetch.
     */
    where: OrderItemAddonWhereUniqueInput
  }

  /**
   * OrderItemAddon findFirst
   */
  export type OrderItemAddonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemAddon to fetch.
     */
    where?: OrderItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemAddons to fetch.
     */
    orderBy?: OrderItemAddonOrderByWithRelationInput | OrderItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemAddons.
     */
    cursor?: OrderItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemAddons.
     */
    distinct?: OrderItemAddonScalarFieldEnum | OrderItemAddonScalarFieldEnum[]
  }

  /**
   * OrderItemAddon findFirstOrThrow
   */
  export type OrderItemAddonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemAddon to fetch.
     */
    where?: OrderItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemAddons to fetch.
     */
    orderBy?: OrderItemAddonOrderByWithRelationInput | OrderItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemAddons.
     */
    cursor?: OrderItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemAddons.
     */
    distinct?: OrderItemAddonScalarFieldEnum | OrderItemAddonScalarFieldEnum[]
  }

  /**
   * OrderItemAddon findMany
   */
  export type OrderItemAddonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemAddons to fetch.
     */
    where?: OrderItemAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemAddons to fetch.
     */
    orderBy?: OrderItemAddonOrderByWithRelationInput | OrderItemAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItemAddons.
     */
    cursor?: OrderItemAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemAddons.
     */
    skip?: number
    distinct?: OrderItemAddonScalarFieldEnum | OrderItemAddonScalarFieldEnum[]
  }

  /**
   * OrderItemAddon create
   */
  export type OrderItemAddonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItemAddon.
     */
    data: XOR<OrderItemAddonCreateInput, OrderItemAddonUncheckedCreateInput>
  }

  /**
   * OrderItemAddon createMany
   */
  export type OrderItemAddonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItemAddons.
     */
    data: OrderItemAddonCreateManyInput | OrderItemAddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItemAddon update
   */
  export type OrderItemAddonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItemAddon.
     */
    data: XOR<OrderItemAddonUpdateInput, OrderItemAddonUncheckedUpdateInput>
    /**
     * Choose, which OrderItemAddon to update.
     */
    where: OrderItemAddonWhereUniqueInput
  }

  /**
   * OrderItemAddon updateMany
   */
  export type OrderItemAddonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItemAddons.
     */
    data: XOR<OrderItemAddonUpdateManyMutationInput, OrderItemAddonUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemAddons to update
     */
    where?: OrderItemAddonWhereInput
    /**
     * Limit how many OrderItemAddons to update.
     */
    limit?: number
  }

  /**
   * OrderItemAddon upsert
   */
  export type OrderItemAddonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItemAddon to update in case it exists.
     */
    where: OrderItemAddonWhereUniqueInput
    /**
     * In case the OrderItemAddon found by the `where` argument doesn't exist, create a new OrderItemAddon with this data.
     */
    create: XOR<OrderItemAddonCreateInput, OrderItemAddonUncheckedCreateInput>
    /**
     * In case the OrderItemAddon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemAddonUpdateInput, OrderItemAddonUncheckedUpdateInput>
  }

  /**
   * OrderItemAddon delete
   */
  export type OrderItemAddonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
    /**
     * Filter which OrderItemAddon to delete.
     */
    where: OrderItemAddonWhereUniqueInput
  }

  /**
   * OrderItemAddon deleteMany
   */
  export type OrderItemAddonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemAddons to delete
     */
    where?: OrderItemAddonWhereInput
    /**
     * Limit how many OrderItemAddons to delete.
     */
    limit?: number
  }

  /**
   * OrderItemAddon without action
   */
  export type OrderItemAddonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemAddon
     */
    select?: OrderItemAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemAddon
     */
    omit?: OrderItemAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemAddonInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
    totalPrice: number | null
    paymobOrderId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
    totalPrice: number | null
    paymobOrderId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    merchantOrderId: string | null
    userId: number | null
    addressId: number | null
    status: $Enums.OrderStatus | null
    totalPrice: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    paymobOrderId: number | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    merchantOrderId: string | null
    userId: number | null
    addressId: number | null
    status: $Enums.OrderStatus | null
    totalPrice: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    paymobOrderId: number | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    merchantOrderId: number
    userId: number
    addressId: number
    status: number
    totalPrice: number
    paymentMethod: number
    paymentStatus: number
    paymobOrderId: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    totalPrice?: true
    paymobOrderId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    totalPrice?: true
    paymobOrderId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    merchantOrderId?: true
    userId?: true
    addressId?: true
    status?: true
    totalPrice?: true
    paymentMethod?: true
    paymentStatus?: true
    paymobOrderId?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    merchantOrderId?: true
    userId?: true
    addressId?: true
    status?: true
    totalPrice?: true
    paymentMethod?: true
    paymentStatus?: true
    paymobOrderId?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    merchantOrderId?: true
    userId?: true
    addressId?: true
    status?: true
    totalPrice?: true
    paymentMethod?: true
    paymentStatus?: true
    paymobOrderId?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    merchantOrderId: string | null
    userId: number
    addressId: number
    status: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    paymobOrderId: number | null
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantOrderId?: boolean
    userId?: boolean
    addressId?: boolean
    status?: boolean
    totalPrice?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    paymobOrderId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    OrderStatusLog?: boolean | Order$OrderStatusLogArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    merchantOrderId?: boolean
    userId?: boolean
    addressId?: boolean
    status?: boolean
    totalPrice?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    paymobOrderId?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantOrderId" | "userId" | "addressId" | "status" | "totalPrice" | "paymentMethod" | "paymentStatus" | "paymobOrderId" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    OrderStatusLog?: boolean | Order$OrderStatusLogArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      OrderStatusLog: Prisma.$OrderStatusLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      merchantOrderId: string | null
      userId: number
      addressId: number
      status: $Enums.OrderStatus
      totalPrice: number
      paymentMethod: $Enums.PaymentMethod
      paymentStatus: $Enums.PaymentStatus
      paymobOrderId: number | null
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderStatusLog<T extends Order$OrderStatusLogArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderStatusLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly merchantOrderId: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly addressId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly totalPrice: FieldRef<"Order", 'Float'>
    readonly paymentMethod: FieldRef<"Order", 'PaymentMethod'>
    readonly paymentStatus: FieldRef<"Order", 'PaymentStatus'>
    readonly paymobOrderId: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.OrderStatusLog
   */
  export type Order$OrderStatusLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    where?: OrderStatusLogWhereInput
    orderBy?: OrderStatusLogOrderByWithRelationInput | OrderStatusLogOrderByWithRelationInput[]
    cursor?: OrderStatusLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderStatusLogScalarFieldEnum | OrderStatusLogScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    productId: number
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly productId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model OrderStatusLog
   */

  export type AggregateOrderStatusLog = {
    _count: OrderStatusLogCountAggregateOutputType | null
    _avg: OrderStatusLogAvgAggregateOutputType | null
    _sum: OrderStatusLogSumAggregateOutputType | null
    _min: OrderStatusLogMinAggregateOutputType | null
    _max: OrderStatusLogMaxAggregateOutputType | null
  }

  export type OrderStatusLogAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderStatusLogSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderStatusLogMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    status: $Enums.OrderStatus | null
    note: string | null
    createdAt: Date | null
  }

  export type OrderStatusLogMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    status: $Enums.OrderStatus | null
    note: string | null
    createdAt: Date | null
  }

  export type OrderStatusLogCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    note: number
    createdAt: number
    _all: number
  }


  export type OrderStatusLogAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderStatusLogSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderStatusLogMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type OrderStatusLogMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type OrderStatusLogCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type OrderStatusLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatusLog to aggregate.
     */
    where?: OrderStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusLogs to fetch.
     */
    orderBy?: OrderStatusLogOrderByWithRelationInput | OrderStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderStatusLogs
    **/
    _count?: true | OrderStatusLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderStatusLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderStatusLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderStatusLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderStatusLogMaxAggregateInputType
  }

  export type GetOrderStatusLogAggregateType<T extends OrderStatusLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderStatusLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderStatusLog[P]>
      : GetScalarType<T[P], AggregateOrderStatusLog[P]>
  }




  export type OrderStatusLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusLogWhereInput
    orderBy?: OrderStatusLogOrderByWithAggregationInput | OrderStatusLogOrderByWithAggregationInput[]
    by: OrderStatusLogScalarFieldEnum[] | OrderStatusLogScalarFieldEnum
    having?: OrderStatusLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderStatusLogCountAggregateInputType | true
    _avg?: OrderStatusLogAvgAggregateInputType
    _sum?: OrderStatusLogSumAggregateInputType
    _min?: OrderStatusLogMinAggregateInputType
    _max?: OrderStatusLogMaxAggregateInputType
  }

  export type OrderStatusLogGroupByOutputType = {
    id: number
    orderId: number
    status: $Enums.OrderStatus
    note: string | null
    createdAt: Date
    _count: OrderStatusLogCountAggregateOutputType | null
    _avg: OrderStatusLogAvgAggregateOutputType | null
    _sum: OrderStatusLogSumAggregateOutputType | null
    _min: OrderStatusLogMinAggregateOutputType | null
    _max: OrderStatusLogMaxAggregateOutputType | null
  }

  type GetOrderStatusLogGroupByPayload<T extends OrderStatusLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderStatusLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderStatusLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderStatusLogGroupByOutputType[P]>
            : GetScalarType<T[P], OrderStatusLogGroupByOutputType[P]>
        }
      >
    >


  export type OrderStatusLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStatusLog"]>



  export type OrderStatusLogSelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type OrderStatusLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "status" | "note" | "createdAt", ExtArgs["result"]["orderStatusLog"]>
  export type OrderStatusLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderStatusLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderStatusLog"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      status: $Enums.OrderStatus
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["orderStatusLog"]>
    composites: {}
  }

  type OrderStatusLogGetPayload<S extends boolean | null | undefined | OrderStatusLogDefaultArgs> = $Result.GetResult<Prisma.$OrderStatusLogPayload, S>

  type OrderStatusLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderStatusLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderStatusLogCountAggregateInputType | true
    }

  export interface OrderStatusLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderStatusLog'], meta: { name: 'OrderStatusLog' } }
    /**
     * Find zero or one OrderStatusLog that matches the filter.
     * @param {OrderStatusLogFindUniqueArgs} args - Arguments to find a OrderStatusLog
     * @example
     * // Get one OrderStatusLog
     * const orderStatusLog = await prisma.orderStatusLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderStatusLogFindUniqueArgs>(args: SelectSubset<T, OrderStatusLogFindUniqueArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderStatusLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderStatusLogFindUniqueOrThrowArgs} args - Arguments to find a OrderStatusLog
     * @example
     * // Get one OrderStatusLog
     * const orderStatusLog = await prisma.orderStatusLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderStatusLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderStatusLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatusLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusLogFindFirstArgs} args - Arguments to find a OrderStatusLog
     * @example
     * // Get one OrderStatusLog
     * const orderStatusLog = await prisma.orderStatusLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderStatusLogFindFirstArgs>(args?: SelectSubset<T, OrderStatusLogFindFirstArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatusLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusLogFindFirstOrThrowArgs} args - Arguments to find a OrderStatusLog
     * @example
     * // Get one OrderStatusLog
     * const orderStatusLog = await prisma.orderStatusLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderStatusLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderStatusLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStatusLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderStatusLogs
     * const orderStatusLogs = await prisma.orderStatusLog.findMany()
     * 
     * // Get first 10 OrderStatusLogs
     * const orderStatusLogs = await prisma.orderStatusLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderStatusLogWithIdOnly = await prisma.orderStatusLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderStatusLogFindManyArgs>(args?: SelectSubset<T, OrderStatusLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderStatusLog.
     * @param {OrderStatusLogCreateArgs} args - Arguments to create a OrderStatusLog.
     * @example
     * // Create one OrderStatusLog
     * const OrderStatusLog = await prisma.orderStatusLog.create({
     *   data: {
     *     // ... data to create a OrderStatusLog
     *   }
     * })
     * 
     */
    create<T extends OrderStatusLogCreateArgs>(args: SelectSubset<T, OrderStatusLogCreateArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderStatusLogs.
     * @param {OrderStatusLogCreateManyArgs} args - Arguments to create many OrderStatusLogs.
     * @example
     * // Create many OrderStatusLogs
     * const orderStatusLog = await prisma.orderStatusLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderStatusLogCreateManyArgs>(args?: SelectSubset<T, OrderStatusLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderStatusLog.
     * @param {OrderStatusLogDeleteArgs} args - Arguments to delete one OrderStatusLog.
     * @example
     * // Delete one OrderStatusLog
     * const OrderStatusLog = await prisma.orderStatusLog.delete({
     *   where: {
     *     // ... filter to delete one OrderStatusLog
     *   }
     * })
     * 
     */
    delete<T extends OrderStatusLogDeleteArgs>(args: SelectSubset<T, OrderStatusLogDeleteArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderStatusLog.
     * @param {OrderStatusLogUpdateArgs} args - Arguments to update one OrderStatusLog.
     * @example
     * // Update one OrderStatusLog
     * const orderStatusLog = await prisma.orderStatusLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderStatusLogUpdateArgs>(args: SelectSubset<T, OrderStatusLogUpdateArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderStatusLogs.
     * @param {OrderStatusLogDeleteManyArgs} args - Arguments to filter OrderStatusLogs to delete.
     * @example
     * // Delete a few OrderStatusLogs
     * const { count } = await prisma.orderStatusLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderStatusLogDeleteManyArgs>(args?: SelectSubset<T, OrderStatusLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderStatusLogs
     * const orderStatusLog = await prisma.orderStatusLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderStatusLogUpdateManyArgs>(args: SelectSubset<T, OrderStatusLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderStatusLog.
     * @param {OrderStatusLogUpsertArgs} args - Arguments to update or create a OrderStatusLog.
     * @example
     * // Update or create a OrderStatusLog
     * const orderStatusLog = await prisma.orderStatusLog.upsert({
     *   create: {
     *     // ... data to create a OrderStatusLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderStatusLog we want to update
     *   }
     * })
     */
    upsert<T extends OrderStatusLogUpsertArgs>(args: SelectSubset<T, OrderStatusLogUpsertArgs<ExtArgs>>): Prisma__OrderStatusLogClient<$Result.GetResult<Prisma.$OrderStatusLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderStatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusLogCountArgs} args - Arguments to filter OrderStatusLogs to count.
     * @example
     * // Count the number of OrderStatusLogs
     * const count = await prisma.orderStatusLog.count({
     *   where: {
     *     // ... the filter for the OrderStatusLogs we want to count
     *   }
     * })
    **/
    count<T extends OrderStatusLogCountArgs>(
      args?: Subset<T, OrderStatusLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderStatusLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderStatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderStatusLogAggregateArgs>(args: Subset<T, OrderStatusLogAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusLogAggregateType<T>>

    /**
     * Group by OrderStatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusLogGroupByArgs} args - Group by arguments.
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
      T extends OrderStatusLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderStatusLogGroupByArgs['orderBy'] }
        : { orderBy?: OrderStatusLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderStatusLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderStatusLog model
   */
  readonly fields: OrderStatusLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderStatusLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderStatusLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderStatusLog model
   */
  interface OrderStatusLogFieldRefs {
    readonly id: FieldRef<"OrderStatusLog", 'Int'>
    readonly orderId: FieldRef<"OrderStatusLog", 'Int'>
    readonly status: FieldRef<"OrderStatusLog", 'OrderStatus'>
    readonly note: FieldRef<"OrderStatusLog", 'String'>
    readonly createdAt: FieldRef<"OrderStatusLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderStatusLog findUnique
   */
  export type OrderStatusLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusLog to fetch.
     */
    where: OrderStatusLogWhereUniqueInput
  }

  /**
   * OrderStatusLog findUniqueOrThrow
   */
  export type OrderStatusLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusLog to fetch.
     */
    where: OrderStatusLogWhereUniqueInput
  }

  /**
   * OrderStatusLog findFirst
   */
  export type OrderStatusLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusLog to fetch.
     */
    where?: OrderStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusLogs to fetch.
     */
    orderBy?: OrderStatusLogOrderByWithRelationInput | OrderStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatusLogs.
     */
    cursor?: OrderStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatusLogs.
     */
    distinct?: OrderStatusLogScalarFieldEnum | OrderStatusLogScalarFieldEnum[]
  }

  /**
   * OrderStatusLog findFirstOrThrow
   */
  export type OrderStatusLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusLog to fetch.
     */
    where?: OrderStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusLogs to fetch.
     */
    orderBy?: OrderStatusLogOrderByWithRelationInput | OrderStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatusLogs.
     */
    cursor?: OrderStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatusLogs.
     */
    distinct?: OrderStatusLogScalarFieldEnum | OrderStatusLogScalarFieldEnum[]
  }

  /**
   * OrderStatusLog findMany
   */
  export type OrderStatusLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusLogs to fetch.
     */
    where?: OrderStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusLogs to fetch.
     */
    orderBy?: OrderStatusLogOrderByWithRelationInput | OrderStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderStatusLogs.
     */
    cursor?: OrderStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusLogs.
     */
    skip?: number
    distinct?: OrderStatusLogScalarFieldEnum | OrderStatusLogScalarFieldEnum[]
  }

  /**
   * OrderStatusLog create
   */
  export type OrderStatusLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderStatusLog.
     */
    data: XOR<OrderStatusLogCreateInput, OrderStatusLogUncheckedCreateInput>
  }

  /**
   * OrderStatusLog createMany
   */
  export type OrderStatusLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderStatusLogs.
     */
    data: OrderStatusLogCreateManyInput | OrderStatusLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderStatusLog update
   */
  export type OrderStatusLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderStatusLog.
     */
    data: XOR<OrderStatusLogUpdateInput, OrderStatusLogUncheckedUpdateInput>
    /**
     * Choose, which OrderStatusLog to update.
     */
    where: OrderStatusLogWhereUniqueInput
  }

  /**
   * OrderStatusLog updateMany
   */
  export type OrderStatusLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderStatusLogs.
     */
    data: XOR<OrderStatusLogUpdateManyMutationInput, OrderStatusLogUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatusLogs to update
     */
    where?: OrderStatusLogWhereInput
    /**
     * Limit how many OrderStatusLogs to update.
     */
    limit?: number
  }

  /**
   * OrderStatusLog upsert
   */
  export type OrderStatusLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderStatusLog to update in case it exists.
     */
    where: OrderStatusLogWhereUniqueInput
    /**
     * In case the OrderStatusLog found by the `where` argument doesn't exist, create a new OrderStatusLog with this data.
     */
    create: XOR<OrderStatusLogCreateInput, OrderStatusLogUncheckedCreateInput>
    /**
     * In case the OrderStatusLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderStatusLogUpdateInput, OrderStatusLogUncheckedUpdateInput>
  }

  /**
   * OrderStatusLog delete
   */
  export type OrderStatusLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
    /**
     * Filter which OrderStatusLog to delete.
     */
    where: OrderStatusLogWhereUniqueInput
  }

  /**
   * OrderStatusLog deleteMany
   */
  export type OrderStatusLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatusLogs to delete
     */
    where?: OrderStatusLogWhereInput
    /**
     * Limit how many OrderStatusLogs to delete.
     */
    limit?: number
  }

  /**
   * OrderStatusLog without action
   */
  export type OrderStatusLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusLog
     */
    select?: OrderStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusLog
     */
    omit?: OrderStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusLogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    body: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    body: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    body: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    body: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "body" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      body: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model PasswordOtp
   */

  export type AggregatePasswordOtp = {
    _count: PasswordOtpCountAggregateOutputType | null
    _avg: PasswordOtpAvgAggregateOutputType | null
    _sum: PasswordOtpSumAggregateOutputType | null
    _min: PasswordOtpMinAggregateOutputType | null
    _max: PasswordOtpMaxAggregateOutputType | null
  }

  export type PasswordOtpAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    attempts: number | null
  }

  export type PasswordOtpSumAggregateOutputType = {
    id: number | null
    userId: number | null
    attempts: number | null
  }

  export type PasswordOtpMinAggregateOutputType = {
    id: number | null
    userId: number | null
    codeHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    attempts: number | null
    createdAt: Date | null
  }

  export type PasswordOtpMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    codeHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    attempts: number | null
    createdAt: Date | null
  }

  export type PasswordOtpCountAggregateOutputType = {
    id: number
    userId: number
    codeHash: number
    expiresAt: number
    usedAt: number
    attempts: number
    createdAt: number
    _all: number
  }


  export type PasswordOtpAvgAggregateInputType = {
    id?: true
    userId?: true
    attempts?: true
  }

  export type PasswordOtpSumAggregateInputType = {
    id?: true
    userId?: true
    attempts?: true
  }

  export type PasswordOtpMinAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    expiresAt?: true
    usedAt?: true
    attempts?: true
    createdAt?: true
  }

  export type PasswordOtpMaxAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    expiresAt?: true
    usedAt?: true
    attempts?: true
    createdAt?: true
  }

  export type PasswordOtpCountAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    expiresAt?: true
    usedAt?: true
    attempts?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordOtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordOtp to aggregate.
     */
    where?: PasswordOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordOtps to fetch.
     */
    orderBy?: PasswordOtpOrderByWithRelationInput | PasswordOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordOtps
    **/
    _count?: true | PasswordOtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordOtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordOtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordOtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordOtpMaxAggregateInputType
  }

  export type GetPasswordOtpAggregateType<T extends PasswordOtpAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordOtp[P]>
      : GetScalarType<T[P], AggregatePasswordOtp[P]>
  }




  export type PasswordOtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordOtpWhereInput
    orderBy?: PasswordOtpOrderByWithAggregationInput | PasswordOtpOrderByWithAggregationInput[]
    by: PasswordOtpScalarFieldEnum[] | PasswordOtpScalarFieldEnum
    having?: PasswordOtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordOtpCountAggregateInputType | true
    _avg?: PasswordOtpAvgAggregateInputType
    _sum?: PasswordOtpSumAggregateInputType
    _min?: PasswordOtpMinAggregateInputType
    _max?: PasswordOtpMaxAggregateInputType
  }

  export type PasswordOtpGroupByOutputType = {
    id: number
    userId: number
    codeHash: string
    expiresAt: Date
    usedAt: Date | null
    attempts: number
    createdAt: Date
    _count: PasswordOtpCountAggregateOutputType | null
    _avg: PasswordOtpAvgAggregateOutputType | null
    _sum: PasswordOtpSumAggregateOutputType | null
    _min: PasswordOtpMinAggregateOutputType | null
    _max: PasswordOtpMaxAggregateOutputType | null
  }

  type GetPasswordOtpGroupByPayload<T extends PasswordOtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordOtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordOtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordOtpGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordOtpGroupByOutputType[P]>
        }
      >
    >


  export type PasswordOtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    attempts?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordOtp"]>



  export type PasswordOtpSelectScalar = {
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    attempts?: boolean
    createdAt?: boolean
  }

  export type PasswordOtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "codeHash" | "expiresAt" | "usedAt" | "attempts" | "createdAt", ExtArgs["result"]["passwordOtp"]>
  export type PasswordOtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordOtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordOtp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      codeHash: string
      expiresAt: Date
      usedAt: Date | null
      attempts: number
      createdAt: Date
    }, ExtArgs["result"]["passwordOtp"]>
    composites: {}
  }

  type PasswordOtpGetPayload<S extends boolean | null | undefined | PasswordOtpDefaultArgs> = $Result.GetResult<Prisma.$PasswordOtpPayload, S>

  type PasswordOtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordOtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordOtpCountAggregateInputType | true
    }

  export interface PasswordOtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordOtp'], meta: { name: 'PasswordOtp' } }
    /**
     * Find zero or one PasswordOtp that matches the filter.
     * @param {PasswordOtpFindUniqueArgs} args - Arguments to find a PasswordOtp
     * @example
     * // Get one PasswordOtp
     * const passwordOtp = await prisma.passwordOtp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordOtpFindUniqueArgs>(args: SelectSubset<T, PasswordOtpFindUniqueArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordOtp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordOtpFindUniqueOrThrowArgs} args - Arguments to find a PasswordOtp
     * @example
     * // Get one PasswordOtp
     * const passwordOtp = await prisma.passwordOtp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordOtpFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordOtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordOtp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordOtpFindFirstArgs} args - Arguments to find a PasswordOtp
     * @example
     * // Get one PasswordOtp
     * const passwordOtp = await prisma.passwordOtp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordOtpFindFirstArgs>(args?: SelectSubset<T, PasswordOtpFindFirstArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordOtp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordOtpFindFirstOrThrowArgs} args - Arguments to find a PasswordOtp
     * @example
     * // Get one PasswordOtp
     * const passwordOtp = await prisma.passwordOtp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordOtpFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordOtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordOtps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordOtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordOtps
     * const passwordOtps = await prisma.passwordOtp.findMany()
     * 
     * // Get first 10 PasswordOtps
     * const passwordOtps = await prisma.passwordOtp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordOtpWithIdOnly = await prisma.passwordOtp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordOtpFindManyArgs>(args?: SelectSubset<T, PasswordOtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordOtp.
     * @param {PasswordOtpCreateArgs} args - Arguments to create a PasswordOtp.
     * @example
     * // Create one PasswordOtp
     * const PasswordOtp = await prisma.passwordOtp.create({
     *   data: {
     *     // ... data to create a PasswordOtp
     *   }
     * })
     * 
     */
    create<T extends PasswordOtpCreateArgs>(args: SelectSubset<T, PasswordOtpCreateArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordOtps.
     * @param {PasswordOtpCreateManyArgs} args - Arguments to create many PasswordOtps.
     * @example
     * // Create many PasswordOtps
     * const passwordOtp = await prisma.passwordOtp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordOtpCreateManyArgs>(args?: SelectSubset<T, PasswordOtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PasswordOtp.
     * @param {PasswordOtpDeleteArgs} args - Arguments to delete one PasswordOtp.
     * @example
     * // Delete one PasswordOtp
     * const PasswordOtp = await prisma.passwordOtp.delete({
     *   where: {
     *     // ... filter to delete one PasswordOtp
     *   }
     * })
     * 
     */
    delete<T extends PasswordOtpDeleteArgs>(args: SelectSubset<T, PasswordOtpDeleteArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordOtp.
     * @param {PasswordOtpUpdateArgs} args - Arguments to update one PasswordOtp.
     * @example
     * // Update one PasswordOtp
     * const passwordOtp = await prisma.passwordOtp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordOtpUpdateArgs>(args: SelectSubset<T, PasswordOtpUpdateArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordOtps.
     * @param {PasswordOtpDeleteManyArgs} args - Arguments to filter PasswordOtps to delete.
     * @example
     * // Delete a few PasswordOtps
     * const { count } = await prisma.passwordOtp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordOtpDeleteManyArgs>(args?: SelectSubset<T, PasswordOtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordOtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordOtps
     * const passwordOtp = await prisma.passwordOtp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordOtpUpdateManyArgs>(args: SelectSubset<T, PasswordOtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordOtp.
     * @param {PasswordOtpUpsertArgs} args - Arguments to update or create a PasswordOtp.
     * @example
     * // Update or create a PasswordOtp
     * const passwordOtp = await prisma.passwordOtp.upsert({
     *   create: {
     *     // ... data to create a PasswordOtp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordOtp we want to update
     *   }
     * })
     */
    upsert<T extends PasswordOtpUpsertArgs>(args: SelectSubset<T, PasswordOtpUpsertArgs<ExtArgs>>): Prisma__PasswordOtpClient<$Result.GetResult<Prisma.$PasswordOtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordOtpCountArgs} args - Arguments to filter PasswordOtps to count.
     * @example
     * // Count the number of PasswordOtps
     * const count = await prisma.passwordOtp.count({
     *   where: {
     *     // ... the filter for the PasswordOtps we want to count
     *   }
     * })
    **/
    count<T extends PasswordOtpCountArgs>(
      args?: Subset<T, PasswordOtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordOtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordOtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordOtpAggregateArgs>(args: Subset<T, PasswordOtpAggregateArgs>): Prisma.PrismaPromise<GetPasswordOtpAggregateType<T>>

    /**
     * Group by PasswordOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordOtpGroupByArgs} args - Group by arguments.
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
      T extends PasswordOtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordOtpGroupByArgs['orderBy'] }
        : { orderBy?: PasswordOtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordOtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordOtp model
   */
  readonly fields: PasswordOtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordOtp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordOtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordOtp model
   */
  interface PasswordOtpFieldRefs {
    readonly id: FieldRef<"PasswordOtp", 'Int'>
    readonly userId: FieldRef<"PasswordOtp", 'Int'>
    readonly codeHash: FieldRef<"PasswordOtp", 'String'>
    readonly expiresAt: FieldRef<"PasswordOtp", 'DateTime'>
    readonly usedAt: FieldRef<"PasswordOtp", 'DateTime'>
    readonly attempts: FieldRef<"PasswordOtp", 'Int'>
    readonly createdAt: FieldRef<"PasswordOtp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordOtp findUnique
   */
  export type PasswordOtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * Filter, which PasswordOtp to fetch.
     */
    where: PasswordOtpWhereUniqueInput
  }

  /**
   * PasswordOtp findUniqueOrThrow
   */
  export type PasswordOtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * Filter, which PasswordOtp to fetch.
     */
    where: PasswordOtpWhereUniqueInput
  }

  /**
   * PasswordOtp findFirst
   */
  export type PasswordOtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * Filter, which PasswordOtp to fetch.
     */
    where?: PasswordOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordOtps to fetch.
     */
    orderBy?: PasswordOtpOrderByWithRelationInput | PasswordOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordOtps.
     */
    cursor?: PasswordOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordOtps.
     */
    distinct?: PasswordOtpScalarFieldEnum | PasswordOtpScalarFieldEnum[]
  }

  /**
   * PasswordOtp findFirstOrThrow
   */
  export type PasswordOtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * Filter, which PasswordOtp to fetch.
     */
    where?: PasswordOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordOtps to fetch.
     */
    orderBy?: PasswordOtpOrderByWithRelationInput | PasswordOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordOtps.
     */
    cursor?: PasswordOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordOtps.
     */
    distinct?: PasswordOtpScalarFieldEnum | PasswordOtpScalarFieldEnum[]
  }

  /**
   * PasswordOtp findMany
   */
  export type PasswordOtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * Filter, which PasswordOtps to fetch.
     */
    where?: PasswordOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordOtps to fetch.
     */
    orderBy?: PasswordOtpOrderByWithRelationInput | PasswordOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordOtps.
     */
    cursor?: PasswordOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordOtps.
     */
    skip?: number
    distinct?: PasswordOtpScalarFieldEnum | PasswordOtpScalarFieldEnum[]
  }

  /**
   * PasswordOtp create
   */
  export type PasswordOtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordOtp.
     */
    data: XOR<PasswordOtpCreateInput, PasswordOtpUncheckedCreateInput>
  }

  /**
   * PasswordOtp createMany
   */
  export type PasswordOtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordOtps.
     */
    data: PasswordOtpCreateManyInput | PasswordOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordOtp update
   */
  export type PasswordOtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordOtp.
     */
    data: XOR<PasswordOtpUpdateInput, PasswordOtpUncheckedUpdateInput>
    /**
     * Choose, which PasswordOtp to update.
     */
    where: PasswordOtpWhereUniqueInput
  }

  /**
   * PasswordOtp updateMany
   */
  export type PasswordOtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordOtps.
     */
    data: XOR<PasswordOtpUpdateManyMutationInput, PasswordOtpUncheckedUpdateManyInput>
    /**
     * Filter which PasswordOtps to update
     */
    where?: PasswordOtpWhereInput
    /**
     * Limit how many PasswordOtps to update.
     */
    limit?: number
  }

  /**
   * PasswordOtp upsert
   */
  export type PasswordOtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordOtp to update in case it exists.
     */
    where: PasswordOtpWhereUniqueInput
    /**
     * In case the PasswordOtp found by the `where` argument doesn't exist, create a new PasswordOtp with this data.
     */
    create: XOR<PasswordOtpCreateInput, PasswordOtpUncheckedCreateInput>
    /**
     * In case the PasswordOtp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordOtpUpdateInput, PasswordOtpUncheckedUpdateInput>
  }

  /**
   * PasswordOtp delete
   */
  export type PasswordOtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
    /**
     * Filter which PasswordOtp to delete.
     */
    where: PasswordOtpWhereUniqueInput
  }

  /**
   * PasswordOtp deleteMany
   */
  export type PasswordOtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordOtps to delete
     */
    where?: PasswordOtpWhereInput
    /**
     * Limit how many PasswordOtps to delete.
     */
    limit?: number
  }

  /**
   * PasswordOtp without action
   */
  export type PasswordOtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordOtp
     */
    select?: PasswordOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordOtp
     */
    omit?: PasswordOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordOtpInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    city: 'city',
    street: 'street',
    building: 'building',
    floor: 'floor',
    apartment: 'apartment',
    note: 'note',
    isDefault: 'isDefault',
    createdAt: 'createdAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    isAvailable: 'isAvailable',
    categoryId: 'categoryId',
    foodType: 'foodType',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductSizeScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    price: 'price'
  };

  export type ProductSizeScalarFieldEnum = (typeof ProductSizeScalarFieldEnum)[keyof typeof ProductSizeScalarFieldEnum]


  export const ProductAddonScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    price: 'price'
  };

  export type ProductAddonScalarFieldEnum = (typeof ProductAddonScalarFieldEnum)[keyof typeof ProductAddonScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    sizeId: 'sizeId',
    quantity: 'quantity'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const CartItemAddonScalarFieldEnum: {
    id: 'id',
    cartItemId: 'cartItemId',
    addonId: 'addonId'
  };

  export type CartItemAddonScalarFieldEnum = (typeof CartItemAddonScalarFieldEnum)[keyof typeof CartItemAddonScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    sizeId: 'sizeId',
    quantity: 'quantity',
    unitPrice: 'unitPrice'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderItemAddonScalarFieldEnum: {
    id: 'id',
    orderItemId: 'orderItemId',
    addonId: 'addonId'
  };

  export type OrderItemAddonScalarFieldEnum = (typeof OrderItemAddonScalarFieldEnum)[keyof typeof OrderItemAddonScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    merchantOrderId: 'merchantOrderId',
    userId: 'userId',
    addressId: 'addressId',
    status: 'status',
    totalPrice: 'totalPrice',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    paymobOrderId: 'paymobOrderId',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const OrderStatusLogScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type OrderStatusLogScalarFieldEnum = (typeof OrderStatusLogScalarFieldEnum)[keyof typeof OrderStatusLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    body: 'body',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PasswordOtpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    codeHash: 'codeHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    attempts: 'attempts',
    createdAt: 'createdAt'
  };

  export type PasswordOtpScalarFieldEnum = (typeof PasswordOtpScalarFieldEnum)[keyof typeof PasswordOtpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AddressOrderByRelevanceFieldEnum: {
    city: 'city',
    street: 'street',
    building: 'building',
    floor: 'floor',
    apartment: 'apartment',
    note: 'note'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    imageUrl: 'imageUrl'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ProductSizeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ProductSizeOrderByRelevanceFieldEnum = (typeof ProductSizeOrderByRelevanceFieldEnum)[keyof typeof ProductSizeOrderByRelevanceFieldEnum]


  export const ProductAddonOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ProductAddonOrderByRelevanceFieldEnum = (typeof ProductAddonOrderByRelevanceFieldEnum)[keyof typeof ProductAddonOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    merchantOrderId: 'merchantOrderId'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const OrderStatusLogOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type OrderStatusLogOrderByRelevanceFieldEnum = (typeof OrderStatusLogOrderByRelevanceFieldEnum)[keyof typeof OrderStatusLogOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    title: 'title',
    body: 'body'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const PasswordOtpOrderByRelevanceFieldEnum: {
    codeHash: 'codeHash'
  };

  export type PasswordOtpOrderByRelevanceFieldEnum = (typeof PasswordOtpOrderByRelevanceFieldEnum)[keyof typeof PasswordOtpOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'FoodType'
   */
  export type EnumFoodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodType'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    addresses?: AddressListRelationFilter
    cartItems?: CartItemListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    Notification?: NotificationListRelationFilter
    PasswordOtp?: PasswordOtpListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    PasswordOtp?: PasswordOtpOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    addresses?: AddressListRelationFilter
    cartItems?: CartItemListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    Notification?: NotificationListRelationFilter
    PasswordOtp?: PasswordOtpListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    userId?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    building?: StringFilter<"Address"> | string
    floor?: StringFilter<"Address"> | string
    apartment?: StringFilter<"Address"> | string
    note?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Order?: OrderListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    street?: SortOrder
    building?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    note?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Order?: OrderOrderByRelationAggregateInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    userId?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    building?: StringFilter<"Address"> | string
    floor?: StringFilter<"Address"> | string
    apartment?: StringFilter<"Address"> | string
    note?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Order?: OrderListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    street?: SortOrder
    building?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    note?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    userId?: IntWithAggregatesFilter<"Address"> | number
    city?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    building?: StringWithAggregatesFilter<"Address"> | string
    floor?: StringWithAggregatesFilter<"Address"> | string
    apartment?: StringWithAggregatesFilter<"Address"> | string
    note?: StringNullableWithAggregatesFilter<"Address"> | string | null
    isDefault?: BoolWithAggregatesFilter<"Address"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    imageUrl?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    imageUrl?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isAvailable?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    foodType?: EnumFoodTypeFilter<"Product"> | $Enums.FoodType
    createdAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    sizes?: ProductSizeListRelationFilter
    addons?: ProductAddonListRelationFilter
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    foodType?: SortOrder
    createdAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    sizes?: ProductSizeOrderByRelationAggregateInput
    addons?: ProductAddonOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isAvailable?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    foodType?: EnumFoodTypeFilter<"Product"> | $Enums.FoodType
    createdAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    sizes?: ProductSizeListRelationFilter
    addons?: ProductAddonListRelationFilter
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    foodType?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isAvailable?: BoolWithAggregatesFilter<"Product"> | boolean
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    foodType?: EnumFoodTypeWithAggregatesFilter<"Product"> | $Enums.FoodType
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductSizeWhereInput = {
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    id?: IntFilter<"ProductSize"> | number
    productId?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    price?: FloatFilter<"ProductSize"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    CartItem?: CartItemListRelationFilter
    OrderItem?: OrderItemListRelationFilter
  }

  export type ProductSizeOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    product?: ProductOrderByWithRelationInput
    CartItem?: CartItemOrderByRelationAggregateInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
    _relevance?: ProductSizeOrderByRelevanceInput
  }

  export type ProductSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    productId?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    price?: FloatFilter<"ProductSize"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    CartItem?: CartItemListRelationFilter
    OrderItem?: OrderItemListRelationFilter
  }, "id">

  export type ProductSizeOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: ProductSizeCountOrderByAggregateInput
    _avg?: ProductSizeAvgOrderByAggregateInput
    _max?: ProductSizeMaxOrderByAggregateInput
    _min?: ProductSizeMinOrderByAggregateInput
    _sum?: ProductSizeSumOrderByAggregateInput
  }

  export type ProductSizeScalarWhereWithAggregatesInput = {
    AND?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    OR?: ProductSizeScalarWhereWithAggregatesInput[]
    NOT?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductSize"> | number
    productId?: IntWithAggregatesFilter<"ProductSize"> | number
    name?: StringWithAggregatesFilter<"ProductSize"> | string
    price?: FloatWithAggregatesFilter<"ProductSize"> | number
  }

  export type ProductAddonWhereInput = {
    AND?: ProductAddonWhereInput | ProductAddonWhereInput[]
    OR?: ProductAddonWhereInput[]
    NOT?: ProductAddonWhereInput | ProductAddonWhereInput[]
    id?: IntFilter<"ProductAddon"> | number
    productId?: IntFilter<"ProductAddon"> | number
    name?: StringFilter<"ProductAddon"> | string
    price?: FloatFilter<"ProductAddon"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    CartItemAddon?: CartItemAddonListRelationFilter
    OrderItemAddon?: OrderItemAddonListRelationFilter
  }

  export type ProductAddonOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    product?: ProductOrderByWithRelationInput
    CartItemAddon?: CartItemAddonOrderByRelationAggregateInput
    OrderItemAddon?: OrderItemAddonOrderByRelationAggregateInput
    _relevance?: ProductAddonOrderByRelevanceInput
  }

  export type ProductAddonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductAddonWhereInput | ProductAddonWhereInput[]
    OR?: ProductAddonWhereInput[]
    NOT?: ProductAddonWhereInput | ProductAddonWhereInput[]
    productId?: IntFilter<"ProductAddon"> | number
    name?: StringFilter<"ProductAddon"> | string
    price?: FloatFilter<"ProductAddon"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    CartItemAddon?: CartItemAddonListRelationFilter
    OrderItemAddon?: OrderItemAddonListRelationFilter
  }, "id">

  export type ProductAddonOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: ProductAddonCountOrderByAggregateInput
    _avg?: ProductAddonAvgOrderByAggregateInput
    _max?: ProductAddonMaxOrderByAggregateInput
    _min?: ProductAddonMinOrderByAggregateInput
    _sum?: ProductAddonSumOrderByAggregateInput
  }

  export type ProductAddonScalarWhereWithAggregatesInput = {
    AND?: ProductAddonScalarWhereWithAggregatesInput | ProductAddonScalarWhereWithAggregatesInput[]
    OR?: ProductAddonScalarWhereWithAggregatesInput[]
    NOT?: ProductAddonScalarWhereWithAggregatesInput | ProductAddonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductAddon"> | number
    productId?: IntWithAggregatesFilter<"ProductAddon"> | number
    name?: StringWithAggregatesFilter<"ProductAddon"> | string
    price?: FloatWithAggregatesFilter<"ProductAddon"> | number
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: IntFilter<"CartItem"> | number
    userId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    sizeId?: IntNullableFilter<"CartItem"> | number | null
    quantity?: IntFilter<"CartItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    size?: XOR<ProductSizeNullableScalarRelationFilter, ProductSizeWhereInput> | null
    addons?: CartItemAddonListRelationFilter
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    size?: ProductSizeOrderByWithRelationInput
    addons?: CartItemAddonOrderByRelationAggregateInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    userId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    sizeId?: IntNullableFilter<"CartItem"> | number | null
    quantity?: IntFilter<"CartItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    size?: XOR<ProductSizeNullableScalarRelationFilter, ProductSizeWhereInput> | null
    addons?: CartItemAddonListRelationFilter
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartItem"> | number
    userId?: IntWithAggregatesFilter<"CartItem"> | number
    productId?: IntWithAggregatesFilter<"CartItem"> | number
    sizeId?: IntNullableWithAggregatesFilter<"CartItem"> | number | null
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
  }

  export type CartItemAddonWhereInput = {
    AND?: CartItemAddonWhereInput | CartItemAddonWhereInput[]
    OR?: CartItemAddonWhereInput[]
    NOT?: CartItemAddonWhereInput | CartItemAddonWhereInput[]
    id?: IntFilter<"CartItemAddon"> | number
    cartItemId?: IntFilter<"CartItemAddon"> | number
    addonId?: IntFilter<"CartItemAddon"> | number
    cartItem?: XOR<CartItemScalarRelationFilter, CartItemWhereInput>
    addon?: XOR<ProductAddonScalarRelationFilter, ProductAddonWhereInput>
  }

  export type CartItemAddonOrderByWithRelationInput = {
    id?: SortOrder
    cartItemId?: SortOrder
    addonId?: SortOrder
    cartItem?: CartItemOrderByWithRelationInput
    addon?: ProductAddonOrderByWithRelationInput
  }

  export type CartItemAddonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartItemAddonWhereInput | CartItemAddonWhereInput[]
    OR?: CartItemAddonWhereInput[]
    NOT?: CartItemAddonWhereInput | CartItemAddonWhereInput[]
    cartItemId?: IntFilter<"CartItemAddon"> | number
    addonId?: IntFilter<"CartItemAddon"> | number
    cartItem?: XOR<CartItemScalarRelationFilter, CartItemWhereInput>
    addon?: XOR<ProductAddonScalarRelationFilter, ProductAddonWhereInput>
  }, "id">

  export type CartItemAddonOrderByWithAggregationInput = {
    id?: SortOrder
    cartItemId?: SortOrder
    addonId?: SortOrder
    _count?: CartItemAddonCountOrderByAggregateInput
    _avg?: CartItemAddonAvgOrderByAggregateInput
    _max?: CartItemAddonMaxOrderByAggregateInput
    _min?: CartItemAddonMinOrderByAggregateInput
    _sum?: CartItemAddonSumOrderByAggregateInput
  }

  export type CartItemAddonScalarWhereWithAggregatesInput = {
    AND?: CartItemAddonScalarWhereWithAggregatesInput | CartItemAddonScalarWhereWithAggregatesInput[]
    OR?: CartItemAddonScalarWhereWithAggregatesInput[]
    NOT?: CartItemAddonScalarWhereWithAggregatesInput | CartItemAddonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartItemAddon"> | number
    cartItemId?: IntWithAggregatesFilter<"CartItemAddon"> | number
    addonId?: IntWithAggregatesFilter<"CartItemAddon"> | number
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    sizeId?: IntNullableFilter<"OrderItem"> | number | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    size?: XOR<ProductSizeNullableScalarRelationFilter, ProductSizeWhereInput> | null
    addons?: OrderItemAddonListRelationFilter
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    size?: ProductSizeOrderByWithRelationInput
    addons?: OrderItemAddonOrderByRelationAggregateInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    sizeId?: IntNullableFilter<"OrderItem"> | number | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    size?: XOR<ProductSizeNullableScalarRelationFilter, ProductSizeWhereInput> | null
    addons?: OrderItemAddonListRelationFilter
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number
    productId?: IntWithAggregatesFilter<"OrderItem"> | number
    sizeId?: IntNullableWithAggregatesFilter<"OrderItem"> | number | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
  }

  export type OrderItemAddonWhereInput = {
    AND?: OrderItemAddonWhereInput | OrderItemAddonWhereInput[]
    OR?: OrderItemAddonWhereInput[]
    NOT?: OrderItemAddonWhereInput | OrderItemAddonWhereInput[]
    id?: IntFilter<"OrderItemAddon"> | number
    orderItemId?: IntFilter<"OrderItemAddon"> | number
    addonId?: IntFilter<"OrderItemAddon"> | number
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
    addon?: XOR<ProductAddonScalarRelationFilter, ProductAddonWhereInput>
  }

  export type OrderItemAddonOrderByWithRelationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    addonId?: SortOrder
    orderItem?: OrderItemOrderByWithRelationInput
    addon?: ProductAddonOrderByWithRelationInput
  }

  export type OrderItemAddonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemAddonWhereInput | OrderItemAddonWhereInput[]
    OR?: OrderItemAddonWhereInput[]
    NOT?: OrderItemAddonWhereInput | OrderItemAddonWhereInput[]
    orderItemId?: IntFilter<"OrderItemAddon"> | number
    addonId?: IntFilter<"OrderItemAddon"> | number
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
    addon?: XOR<ProductAddonScalarRelationFilter, ProductAddonWhereInput>
  }, "id">

  export type OrderItemAddonOrderByWithAggregationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    addonId?: SortOrder
    _count?: OrderItemAddonCountOrderByAggregateInput
    _avg?: OrderItemAddonAvgOrderByAggregateInput
    _max?: OrderItemAddonMaxOrderByAggregateInput
    _min?: OrderItemAddonMinOrderByAggregateInput
    _sum?: OrderItemAddonSumOrderByAggregateInput
  }

  export type OrderItemAddonScalarWhereWithAggregatesInput = {
    AND?: OrderItemAddonScalarWhereWithAggregatesInput | OrderItemAddonScalarWhereWithAggregatesInput[]
    OR?: OrderItemAddonScalarWhereWithAggregatesInput[]
    NOT?: OrderItemAddonScalarWhereWithAggregatesInput | OrderItemAddonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItemAddon"> | number
    orderItemId?: IntWithAggregatesFilter<"OrderItemAddon"> | number
    addonId?: IntWithAggregatesFilter<"OrderItemAddon"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    merchantOrderId?: StringNullableFilter<"Order"> | string | null
    userId?: IntFilter<"Order"> | number
    addressId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatFilter<"Order"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Order"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    paymobOrderId?: IntNullableFilter<"Order"> | number | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    orderItems?: OrderItemListRelationFilter
    OrderStatusLog?: OrderStatusLogListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    merchantOrderId?: SortOrderInput | SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymobOrderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    OrderStatusLog?: OrderStatusLogOrderByRelationAggregateInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    merchantOrderId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    addressId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatFilter<"Order"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Order"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    paymobOrderId?: IntNullableFilter<"Order"> | number | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    orderItems?: OrderItemListRelationFilter
    OrderStatusLog?: OrderStatusLogListRelationFilter
  }, "id" | "merchantOrderId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    merchantOrderId?: SortOrderInput | SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymobOrderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    merchantOrderId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    userId?: IntWithAggregatesFilter<"Order"> | number
    addressId?: IntWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatWithAggregatesFilter<"Order"> | number
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Order"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus
    paymobOrderId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    productId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    productId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    productId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type OrderStatusLogWhereInput = {
    AND?: OrderStatusLogWhereInput | OrderStatusLogWhereInput[]
    OR?: OrderStatusLogWhereInput[]
    NOT?: OrderStatusLogWhereInput | OrderStatusLogWhereInput[]
    id?: IntFilter<"OrderStatusLog"> | number
    orderId?: IntFilter<"OrderStatusLog"> | number
    status?: EnumOrderStatusFilter<"OrderStatusLog"> | $Enums.OrderStatus
    note?: StringNullableFilter<"OrderStatusLog"> | string | null
    createdAt?: DateTimeFilter<"OrderStatusLog"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderStatusLogOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    _relevance?: OrderStatusLogOrderByRelevanceInput
  }

  export type OrderStatusLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderStatusLogWhereInput | OrderStatusLogWhereInput[]
    OR?: OrderStatusLogWhereInput[]
    NOT?: OrderStatusLogWhereInput | OrderStatusLogWhereInput[]
    orderId?: IntFilter<"OrderStatusLog"> | number
    status?: EnumOrderStatusFilter<"OrderStatusLog"> | $Enums.OrderStatus
    note?: StringNullableFilter<"OrderStatusLog"> | string | null
    createdAt?: DateTimeFilter<"OrderStatusLog"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderStatusLogOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderStatusLogCountOrderByAggregateInput
    _avg?: OrderStatusLogAvgOrderByAggregateInput
    _max?: OrderStatusLogMaxOrderByAggregateInput
    _min?: OrderStatusLogMinOrderByAggregateInput
    _sum?: OrderStatusLogSumOrderByAggregateInput
  }

  export type OrderStatusLogScalarWhereWithAggregatesInput = {
    AND?: OrderStatusLogScalarWhereWithAggregatesInput | OrderStatusLogScalarWhereWithAggregatesInput[]
    OR?: OrderStatusLogScalarWhereWithAggregatesInput[]
    NOT?: OrderStatusLogScalarWhereWithAggregatesInput | OrderStatusLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderStatusLog"> | number
    orderId?: IntWithAggregatesFilter<"OrderStatusLog"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"OrderStatusLog"> | $Enums.OrderStatus
    note?: StringNullableWithAggregatesFilter<"OrderStatusLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderStatusLog"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type PasswordOtpWhereInput = {
    AND?: PasswordOtpWhereInput | PasswordOtpWhereInput[]
    OR?: PasswordOtpWhereInput[]
    NOT?: PasswordOtpWhereInput | PasswordOtpWhereInput[]
    id?: IntFilter<"PasswordOtp"> | number
    userId?: IntFilter<"PasswordOtp"> | number
    codeHash?: StringFilter<"PasswordOtp"> | string
    expiresAt?: DateTimeFilter<"PasswordOtp"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordOtp"> | Date | string | null
    attempts?: IntFilter<"PasswordOtp"> | number
    createdAt?: DateTimeFilter<"PasswordOtp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordOtpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PasswordOtpOrderByRelevanceInput
  }

  export type PasswordOtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PasswordOtpWhereInput | PasswordOtpWhereInput[]
    OR?: PasswordOtpWhereInput[]
    NOT?: PasswordOtpWhereInput | PasswordOtpWhereInput[]
    userId?: IntFilter<"PasswordOtp"> | number
    codeHash?: StringFilter<"PasswordOtp"> | string
    expiresAt?: DateTimeFilter<"PasswordOtp"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordOtp"> | Date | string | null
    attempts?: IntFilter<"PasswordOtp"> | number
    createdAt?: DateTimeFilter<"PasswordOtp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PasswordOtpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordOtpCountOrderByAggregateInput
    _avg?: PasswordOtpAvgOrderByAggregateInput
    _max?: PasswordOtpMaxOrderByAggregateInput
    _min?: PasswordOtpMinOrderByAggregateInput
    _sum?: PasswordOtpSumOrderByAggregateInput
  }

  export type PasswordOtpScalarWhereWithAggregatesInput = {
    AND?: PasswordOtpScalarWhereWithAggregatesInput | PasswordOtpScalarWhereWithAggregatesInput[]
    OR?: PasswordOtpScalarWhereWithAggregatesInput[]
    NOT?: PasswordOtpScalarWhereWithAggregatesInput | PasswordOtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordOtp"> | number
    userId?: IntWithAggregatesFilter<"PasswordOtp"> | number
    codeHash?: StringWithAggregatesFilter<"PasswordOtp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordOtp"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordOtp"> | Date | string | null
    attempts?: IntWithAggregatesFilter<"PasswordOtp"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PasswordOtp"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAddressesInput
    Order?: OrderCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    userId: number
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
    Order?: OrderUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    userId: number
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    addons?: ProductAddonCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    addons?: ProductAddonUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSizeCreateInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutSizesInput
    CartItem?: CartItemCreateNestedManyWithoutSizeInput
    OrderItem?: OrderItemCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeUncheckedCreateInput = {
    id?: number
    productId: number
    name: string
    price: number
    CartItem?: CartItemUncheckedCreateNestedManyWithoutSizeInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
    CartItem?: CartItemUpdateManyWithoutSizeNestedInput
    OrderItem?: OrderItemUpdateManyWithoutSizeNestedInput
  }

  export type ProductSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItem?: CartItemUncheckedUpdateManyWithoutSizeNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type ProductSizeCreateManyInput = {
    id?: number
    productId: number
    name: string
    price: number
  }

  export type ProductSizeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductAddonCreateInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutAddonsInput
    CartItemAddon?: CartItemAddonCreateNestedManyWithoutAddonInput
    OrderItemAddon?: OrderItemAddonCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonUncheckedCreateInput = {
    id?: number
    productId: number
    name: string
    price: number
    CartItemAddon?: CartItemAddonUncheckedCreateNestedManyWithoutAddonInput
    OrderItemAddon?: OrderItemAddonUncheckedCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutAddonsNestedInput
    CartItemAddon?: CartItemAddonUpdateManyWithoutAddonNestedInput
    OrderItemAddon?: OrderItemAddonUpdateManyWithoutAddonNestedInput
  }

  export type ProductAddonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItemAddon?: CartItemAddonUncheckedUpdateManyWithoutAddonNestedInput
    OrderItemAddon?: OrderItemAddonUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type ProductAddonCreateManyInput = {
    id?: number
    productId: number
    name: string
    price: number
  }

  export type ProductAddonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductAddonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemCreateInput = {
    quantity: number
    user: UserCreateNestedOneWithoutCartItemsInput
    product: ProductCreateNestedOneWithoutCartItemsInput
    size?: ProductSizeCreateNestedOneWithoutCartItemInput
    addons?: CartItemAddonCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    sizeId?: number | null
    quantity: number
    addons?: CartItemAddonUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
    size?: ProductSizeUpdateOneWithoutCartItemNestedInput
    addons?: CartItemAddonUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addons?: CartItemAddonUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemCreateManyInput = {
    id?: number
    userId: number
    productId: number
    sizeId?: number | null
    quantity: number
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemAddonCreateInput = {
    cartItem: CartItemCreateNestedOneWithoutAddonsInput
    addon: ProductAddonCreateNestedOneWithoutCartItemAddonInput
  }

  export type CartItemAddonUncheckedCreateInput = {
    id?: number
    cartItemId: number
    addonId: number
  }

  export type CartItemAddonUpdateInput = {
    cartItem?: CartItemUpdateOneRequiredWithoutAddonsNestedInput
    addon?: ProductAddonUpdateOneRequiredWithoutCartItemAddonNestedInput
  }

  export type CartItemAddonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartItemId?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemAddonCreateManyInput = {
    id?: number
    cartItemId: number
    addonId: number
  }

  export type CartItemAddonUpdateManyMutationInput = {

  }

  export type CartItemAddonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartItemId?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateInput = {
    quantity: number
    unitPrice: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
    size?: ProductSizeCreateNestedOneWithoutOrderItemInput
    addons?: OrderItemAddonCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    orderId: number
    productId: number
    sizeId?: number | null
    quantity: number
    unitPrice: number
    addons?: OrderItemAddonUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    size?: ProductSizeUpdateOneWithoutOrderItemNestedInput
    addons?: OrderItemAddonUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    addons?: OrderItemAddonUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemCreateManyInput = {
    id?: number
    orderId: number
    productId: number
    sizeId?: number | null
    quantity: number
    unitPrice: number
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemAddonCreateInput = {
    orderItem: OrderItemCreateNestedOneWithoutAddonsInput
    addon: ProductAddonCreateNestedOneWithoutOrderItemAddonInput
  }

  export type OrderItemAddonUncheckedCreateInput = {
    id?: number
    orderItemId: number
    addonId: number
  }

  export type OrderItemAddonUpdateInput = {
    orderItem?: OrderItemUpdateOneRequiredWithoutAddonsNestedInput
    addon?: ProductAddonUpdateOneRequiredWithoutOrderItemAddonNestedInput
  }

  export type OrderItemAddonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderItemId?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemAddonCreateManyInput = {
    id?: number
    orderItemId: number
    addonId: number
  }

  export type OrderItemAddonUpdateManyMutationInput = {

  }

  export type OrderItemAddonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderItemId?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    merchantOrderId?: string | null
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    address: AddressCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    OrderStatusLog?: OrderStatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    merchantOrderId?: string | null
    userId: number
    addressId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    OrderStatusLog?: OrderStatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    OrderStatusLog?: OrderStatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    OrderStatusLog?: OrderStatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    merchantOrderId?: string | null
    userId: number
    addressId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusLogCreateInput = {
    status: $Enums.OrderStatus
    note?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderStatusLogInput
  }

  export type OrderStatusLogUncheckedCreateInput = {
    id?: number
    orderId: number
    status: $Enums.OrderStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusLogUpdateInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderStatusLogNestedInput
  }

  export type OrderStatusLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusLogCreateManyInput = {
    id?: number
    orderId: number
    status: $Enums.OrderStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusLogUpdateManyMutationInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    body: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    body: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    body: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordOtpCreateInput = {
    codeHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    attempts?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordOtpInput
  }

  export type PasswordOtpUncheckedCreateInput = {
    id?: number
    userId: number
    codeHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    attempts?: number
    createdAt?: Date | string
  }

  export type PasswordOtpUpdateInput = {
    codeHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordOtpNestedInput
  }

  export type PasswordOtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordOtpCreateManyInput = {
    id?: number
    userId: number
    codeHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    attempts?: number
    createdAt?: Date | string
  }

  export type PasswordOtpUpdateManyMutationInput = {
    codeHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordOtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PasswordOtpListRelationFilter = {
    every?: PasswordOtpWhereInput
    some?: PasswordOtpWhereInput
    none?: PasswordOtpWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordOtpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    street?: SortOrder
    building?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    note?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    street?: SortOrder
    building?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    note?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    street?: SortOrder
    building?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    note?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumFoodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodType | EnumFoodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodType[]
    notIn?: $Enums.FoodType[]
    not?: NestedEnumFoodTypeFilter<$PrismaModel> | $Enums.FoodType
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductSizeListRelationFilter = {
    every?: ProductSizeWhereInput
    some?: ProductSizeWhereInput
    none?: ProductSizeWhereInput
  }

  export type ProductAddonListRelationFilter = {
    every?: ProductAddonWhereInput
    some?: ProductAddonWhereInput
    none?: ProductAddonWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ProductSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductAddonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    foodType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    foodType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    foodType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFoodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodType | EnumFoodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodType[]
    notIn?: $Enums.FoodType[]
    not?: NestedEnumFoodTypeWithAggregatesFilter<$PrismaModel> | $Enums.FoodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodTypeFilter<$PrismaModel>
    _max?: NestedEnumFoodTypeFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductSizeOrderByRelevanceInput = {
    fields: ProductSizeOrderByRelevanceFieldEnum | ProductSizeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductSizeCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ProductSizeAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
  }

  export type ProductSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ProductSizeMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ProductSizeSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
  }

  export type CartItemAddonListRelationFilter = {
    every?: CartItemAddonWhereInput
    some?: CartItemAddonWhereInput
    none?: CartItemAddonWhereInput
  }

  export type OrderItemAddonListRelationFilter = {
    every?: OrderItemAddonWhereInput
    some?: OrderItemAddonWhereInput
    none?: OrderItemAddonWhereInput
  }

  export type CartItemAddonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemAddonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductAddonOrderByRelevanceInput = {
    fields: ProductAddonOrderByRelevanceFieldEnum | ProductAddonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductAddonCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ProductAddonAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
  }

  export type ProductAddonMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ProductAddonMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ProductAddonSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductSizeNullableScalarRelationFilter = {
    is?: ProductSizeWhereInput | null
    isNot?: ProductSizeWhereInput | null
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type CartItemScalarRelationFilter = {
    is?: CartItemWhereInput
    isNot?: CartItemWhereInput
  }

  export type ProductAddonScalarRelationFilter = {
    is?: ProductAddonWhereInput
    isNot?: ProductAddonWhereInput
  }

  export type CartItemAddonCountOrderByAggregateInput = {
    id?: SortOrder
    cartItemId?: SortOrder
    addonId?: SortOrder
  }

  export type CartItemAddonAvgOrderByAggregateInput = {
    id?: SortOrder
    cartItemId?: SortOrder
    addonId?: SortOrder
  }

  export type CartItemAddonMaxOrderByAggregateInput = {
    id?: SortOrder
    cartItemId?: SortOrder
    addonId?: SortOrder
  }

  export type CartItemAddonMinOrderByAggregateInput = {
    id?: SortOrder
    cartItemId?: SortOrder
    addonId?: SortOrder
  }

  export type CartItemAddonSumOrderByAggregateInput = {
    id?: SortOrder
    cartItemId?: SortOrder
    addonId?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemScalarRelationFilter = {
    is?: OrderItemWhereInput
    isNot?: OrderItemWhereInput
  }

  export type OrderItemAddonCountOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    addonId?: SortOrder
  }

  export type OrderItemAddonAvgOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    addonId?: SortOrder
  }

  export type OrderItemAddonMaxOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    addonId?: SortOrder
  }

  export type OrderItemAddonMinOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    addonId?: SortOrder
  }

  export type OrderItemAddonSumOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    addonId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type OrderStatusLogListRelationFilter = {
    every?: OrderStatusLogWhereInput
    some?: OrderStatusLogWhereInput
    none?: OrderStatusLogWhereInput
  }

  export type OrderStatusLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    merchantOrderId?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymobOrderId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    totalPrice?: SortOrder
    paymobOrderId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantOrderId?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymobOrderId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    merchantOrderId?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymobOrderId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    totalPrice?: SortOrder
    paymobOrderId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type OrderStatusLogOrderByRelevanceInput = {
    fields: OrderStatusLogOrderByRelevanceFieldEnum | OrderStatusLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderStatusLogCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderStatusLogAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type OrderStatusLogMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderStatusLogMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderStatusLogSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PasswordOtpOrderByRelevanceInput = {
    fields: PasswordOtpOrderByRelevanceFieldEnum | PasswordOtpOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PasswordOtpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordOtpAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attempts?: SortOrder
  }

  export type PasswordOtpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordOtpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordOtpSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attempts?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PasswordOtpCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordOtpCreateWithoutUserInput, PasswordOtpUncheckedCreateWithoutUserInput> | PasswordOtpCreateWithoutUserInput[] | PasswordOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordOtpCreateOrConnectWithoutUserInput | PasswordOtpCreateOrConnectWithoutUserInput[]
    createMany?: PasswordOtpCreateManyUserInputEnvelope
    connect?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PasswordOtpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordOtpCreateWithoutUserInput, PasswordOtpUncheckedCreateWithoutUserInput> | PasswordOtpCreateWithoutUserInput[] | PasswordOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordOtpCreateOrConnectWithoutUserInput | PasswordOtpCreateOrConnectWithoutUserInput[]
    createMany?: PasswordOtpCreateManyUserInputEnvelope
    connect?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PasswordOtpUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordOtpCreateWithoutUserInput, PasswordOtpUncheckedCreateWithoutUserInput> | PasswordOtpCreateWithoutUserInput[] | PasswordOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordOtpCreateOrConnectWithoutUserInput | PasswordOtpCreateOrConnectWithoutUserInput[]
    upsert?: PasswordOtpUpsertWithWhereUniqueWithoutUserInput | PasswordOtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordOtpCreateManyUserInputEnvelope
    set?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    disconnect?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    delete?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    connect?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    update?: PasswordOtpUpdateWithWhereUniqueWithoutUserInput | PasswordOtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordOtpUpdateManyWithWhereWithoutUserInput | PasswordOtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordOtpScalarWhereInput | PasswordOtpScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PasswordOtpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordOtpCreateWithoutUserInput, PasswordOtpUncheckedCreateWithoutUserInput> | PasswordOtpCreateWithoutUserInput[] | PasswordOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordOtpCreateOrConnectWithoutUserInput | PasswordOtpCreateOrConnectWithoutUserInput[]
    upsert?: PasswordOtpUpsertWithWhereUniqueWithoutUserInput | PasswordOtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordOtpCreateManyUserInputEnvelope
    set?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    disconnect?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    delete?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    connect?: PasswordOtpWhereUniqueInput | PasswordOtpWhereUniqueInput[]
    update?: PasswordOtpUpdateWithWhereUniqueWithoutUserInput | PasswordOtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordOtpUpdateManyWithWhereWithoutUserInput | PasswordOtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordOtpScalarWhereInput | PasswordOtpScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type OrderUpdateManyWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAddressInput | OrderUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAddressInput | OrderUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAddressInput | OrderUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAddressInput | OrderUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductSizeCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductAddonCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAddonCreateWithoutProductInput, ProductAddonUncheckedCreateWithoutProductInput> | ProductAddonCreateWithoutProductInput[] | ProductAddonUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAddonCreateOrConnectWithoutProductInput | ProductAddonCreateOrConnectWithoutProductInput[]
    createMany?: ProductAddonCreateManyProductInputEnvelope
    connect?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ProductSizeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductAddonUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAddonCreateWithoutProductInput, ProductAddonUncheckedCreateWithoutProductInput> | ProductAddonCreateWithoutProductInput[] | ProductAddonUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAddonCreateOrConnectWithoutProductInput | ProductAddonCreateOrConnectWithoutProductInput[]
    createMany?: ProductAddonCreateManyProductInputEnvelope
    connect?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFoodTypeFieldUpdateOperationsInput = {
    set?: $Enums.FoodType
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductSizeUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductAddonUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAddonCreateWithoutProductInput, ProductAddonUncheckedCreateWithoutProductInput> | ProductAddonCreateWithoutProductInput[] | ProductAddonUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAddonCreateOrConnectWithoutProductInput | ProductAddonCreateOrConnectWithoutProductInput[]
    upsert?: ProductAddonUpsertWithWhereUniqueWithoutProductInput | ProductAddonUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAddonCreateManyProductInputEnvelope
    set?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    disconnect?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    delete?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    connect?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    update?: ProductAddonUpdateWithWhereUniqueWithoutProductInput | ProductAddonUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAddonUpdateManyWithWhereWithoutProductInput | ProductAddonUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAddonScalarWhereInput | ProductAddonScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductAddonUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAddonCreateWithoutProductInput, ProductAddonUncheckedCreateWithoutProductInput> | ProductAddonCreateWithoutProductInput[] | ProductAddonUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAddonCreateOrConnectWithoutProductInput | ProductAddonCreateOrConnectWithoutProductInput[]
    upsert?: ProductAddonUpsertWithWhereUniqueWithoutProductInput | ProductAddonUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAddonCreateManyProductInputEnvelope
    set?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    disconnect?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    delete?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    connect?: ProductAddonWhereUniqueInput | ProductAddonWhereUniqueInput[]
    update?: ProductAddonUpdateWithWhereUniqueWithoutProductInput | ProductAddonUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAddonUpdateManyWithWhereWithoutProductInput | ProductAddonUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAddonScalarWhereInput | ProductAddonScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSizesInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    connect?: ProductWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutSizeInput = {
    create?: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput> | CartItemCreateWithoutSizeInput[] | CartItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutSizeInput | CartItemCreateOrConnectWithoutSizeInput[]
    createMany?: CartItemCreateManySizeInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutSizeInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput> | CartItemCreateWithoutSizeInput[] | CartItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutSizeInput | CartItemCreateOrConnectWithoutSizeInput[]
    createMany?: CartItemCreateManySizeInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    upsert?: ProductUpsertWithoutSizesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSizesInput, ProductUpdateWithoutSizesInput>, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type CartItemUpdateManyWithoutSizeNestedInput = {
    create?: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput> | CartItemCreateWithoutSizeInput[] | CartItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutSizeInput | CartItemCreateOrConnectWithoutSizeInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutSizeInput | CartItemUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: CartItemCreateManySizeInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutSizeInput | CartItemUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutSizeInput | CartItemUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutSizeNestedInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutSizeInput | OrderItemUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutSizeInput | OrderItemUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutSizeInput | OrderItemUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput> | CartItemCreateWithoutSizeInput[] | CartItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutSizeInput | CartItemCreateOrConnectWithoutSizeInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutSizeInput | CartItemUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: CartItemCreateManySizeInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutSizeInput | CartItemUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutSizeInput | CartItemUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutSizeInput | OrderItemUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutSizeInput | OrderItemUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutSizeInput | OrderItemUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutAddonsInput = {
    create?: XOR<ProductCreateWithoutAddonsInput, ProductUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAddonsInput
    connect?: ProductWhereUniqueInput
  }

  export type CartItemAddonCreateNestedManyWithoutAddonInput = {
    create?: XOR<CartItemAddonCreateWithoutAddonInput, CartItemAddonUncheckedCreateWithoutAddonInput> | CartItemAddonCreateWithoutAddonInput[] | CartItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutAddonInput | CartItemAddonCreateOrConnectWithoutAddonInput[]
    createMany?: CartItemAddonCreateManyAddonInputEnvelope
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
  }

  export type OrderItemAddonCreateNestedManyWithoutAddonInput = {
    create?: XOR<OrderItemAddonCreateWithoutAddonInput, OrderItemAddonUncheckedCreateWithoutAddonInput> | OrderItemAddonCreateWithoutAddonInput[] | OrderItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutAddonInput | OrderItemAddonCreateOrConnectWithoutAddonInput[]
    createMany?: OrderItemAddonCreateManyAddonInputEnvelope
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
  }

  export type CartItemAddonUncheckedCreateNestedManyWithoutAddonInput = {
    create?: XOR<CartItemAddonCreateWithoutAddonInput, CartItemAddonUncheckedCreateWithoutAddonInput> | CartItemAddonCreateWithoutAddonInput[] | CartItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutAddonInput | CartItemAddonCreateOrConnectWithoutAddonInput[]
    createMany?: CartItemAddonCreateManyAddonInputEnvelope
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
  }

  export type OrderItemAddonUncheckedCreateNestedManyWithoutAddonInput = {
    create?: XOR<OrderItemAddonCreateWithoutAddonInput, OrderItemAddonUncheckedCreateWithoutAddonInput> | OrderItemAddonCreateWithoutAddonInput[] | OrderItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutAddonInput | OrderItemAddonCreateOrConnectWithoutAddonInput[]
    createMany?: OrderItemAddonCreateManyAddonInputEnvelope
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutAddonsNestedInput = {
    create?: XOR<ProductCreateWithoutAddonsInput, ProductUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAddonsInput
    upsert?: ProductUpsertWithoutAddonsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAddonsInput, ProductUpdateWithoutAddonsInput>, ProductUncheckedUpdateWithoutAddonsInput>
  }

  export type CartItemAddonUpdateManyWithoutAddonNestedInput = {
    create?: XOR<CartItemAddonCreateWithoutAddonInput, CartItemAddonUncheckedCreateWithoutAddonInput> | CartItemAddonCreateWithoutAddonInput[] | CartItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutAddonInput | CartItemAddonCreateOrConnectWithoutAddonInput[]
    upsert?: CartItemAddonUpsertWithWhereUniqueWithoutAddonInput | CartItemAddonUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: CartItemAddonCreateManyAddonInputEnvelope
    set?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    disconnect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    delete?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    update?: CartItemAddonUpdateWithWhereUniqueWithoutAddonInput | CartItemAddonUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: CartItemAddonUpdateManyWithWhereWithoutAddonInput | CartItemAddonUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: CartItemAddonScalarWhereInput | CartItemAddonScalarWhereInput[]
  }

  export type OrderItemAddonUpdateManyWithoutAddonNestedInput = {
    create?: XOR<OrderItemAddonCreateWithoutAddonInput, OrderItemAddonUncheckedCreateWithoutAddonInput> | OrderItemAddonCreateWithoutAddonInput[] | OrderItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutAddonInput | OrderItemAddonCreateOrConnectWithoutAddonInput[]
    upsert?: OrderItemAddonUpsertWithWhereUniqueWithoutAddonInput | OrderItemAddonUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: OrderItemAddonCreateManyAddonInputEnvelope
    set?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    disconnect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    delete?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    update?: OrderItemAddonUpdateWithWhereUniqueWithoutAddonInput | OrderItemAddonUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: OrderItemAddonUpdateManyWithWhereWithoutAddonInput | OrderItemAddonUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: OrderItemAddonScalarWhereInput | OrderItemAddonScalarWhereInput[]
  }

  export type CartItemAddonUncheckedUpdateManyWithoutAddonNestedInput = {
    create?: XOR<CartItemAddonCreateWithoutAddonInput, CartItemAddonUncheckedCreateWithoutAddonInput> | CartItemAddonCreateWithoutAddonInput[] | CartItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutAddonInput | CartItemAddonCreateOrConnectWithoutAddonInput[]
    upsert?: CartItemAddonUpsertWithWhereUniqueWithoutAddonInput | CartItemAddonUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: CartItemAddonCreateManyAddonInputEnvelope
    set?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    disconnect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    delete?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    update?: CartItemAddonUpdateWithWhereUniqueWithoutAddonInput | CartItemAddonUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: CartItemAddonUpdateManyWithWhereWithoutAddonInput | CartItemAddonUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: CartItemAddonScalarWhereInput | CartItemAddonScalarWhereInput[]
  }

  export type OrderItemAddonUncheckedUpdateManyWithoutAddonNestedInput = {
    create?: XOR<OrderItemAddonCreateWithoutAddonInput, OrderItemAddonUncheckedCreateWithoutAddonInput> | OrderItemAddonCreateWithoutAddonInput[] | OrderItemAddonUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutAddonInput | OrderItemAddonCreateOrConnectWithoutAddonInput[]
    upsert?: OrderItemAddonUpsertWithWhereUniqueWithoutAddonInput | OrderItemAddonUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: OrderItemAddonCreateManyAddonInputEnvelope
    set?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    disconnect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    delete?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    update?: OrderItemAddonUpdateWithWhereUniqueWithoutAddonInput | OrderItemAddonUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: OrderItemAddonUpdateManyWithWhereWithoutAddonInput | OrderItemAddonUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: OrderItemAddonScalarWhereInput | OrderItemAddonScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductSizeCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ProductSizeCreateWithoutCartItemInput, ProductSizeUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductSizeCreateOrConnectWithoutCartItemInput
    connect?: ProductSizeWhereUniqueInput
  }

  export type CartItemAddonCreateNestedManyWithoutCartItemInput = {
    create?: XOR<CartItemAddonCreateWithoutCartItemInput, CartItemAddonUncheckedCreateWithoutCartItemInput> | CartItemAddonCreateWithoutCartItemInput[] | CartItemAddonUncheckedCreateWithoutCartItemInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutCartItemInput | CartItemAddonCreateOrConnectWithoutCartItemInput[]
    createMany?: CartItemAddonCreateManyCartItemInputEnvelope
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
  }

  export type CartItemAddonUncheckedCreateNestedManyWithoutCartItemInput = {
    create?: XOR<CartItemAddonCreateWithoutCartItemInput, CartItemAddonUncheckedCreateWithoutCartItemInput> | CartItemAddonCreateWithoutCartItemInput[] | CartItemAddonUncheckedCreateWithoutCartItemInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutCartItemInput | CartItemAddonCreateOrConnectWithoutCartItemInput[]
    createMany?: CartItemAddonCreateManyCartItemInputEnvelope
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemsInput
    upsert?: UserUpsertWithoutCartItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartItemsInput, UserUpdateWithoutCartItemsInput>, UserUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    upsert?: ProductUpsertWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartItemsInput, ProductUpdateWithoutCartItemsInput>, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductSizeUpdateOneWithoutCartItemNestedInput = {
    create?: XOR<ProductSizeCreateWithoutCartItemInput, ProductSizeUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductSizeCreateOrConnectWithoutCartItemInput
    upsert?: ProductSizeUpsertWithoutCartItemInput
    disconnect?: ProductSizeWhereInput | boolean
    delete?: ProductSizeWhereInput | boolean
    connect?: ProductSizeWhereUniqueInput
    update?: XOR<XOR<ProductSizeUpdateToOneWithWhereWithoutCartItemInput, ProductSizeUpdateWithoutCartItemInput>, ProductSizeUncheckedUpdateWithoutCartItemInput>
  }

  export type CartItemAddonUpdateManyWithoutCartItemNestedInput = {
    create?: XOR<CartItemAddonCreateWithoutCartItemInput, CartItemAddonUncheckedCreateWithoutCartItemInput> | CartItemAddonCreateWithoutCartItemInput[] | CartItemAddonUncheckedCreateWithoutCartItemInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutCartItemInput | CartItemAddonCreateOrConnectWithoutCartItemInput[]
    upsert?: CartItemAddonUpsertWithWhereUniqueWithoutCartItemInput | CartItemAddonUpsertWithWhereUniqueWithoutCartItemInput[]
    createMany?: CartItemAddonCreateManyCartItemInputEnvelope
    set?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    disconnect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    delete?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    update?: CartItemAddonUpdateWithWhereUniqueWithoutCartItemInput | CartItemAddonUpdateWithWhereUniqueWithoutCartItemInput[]
    updateMany?: CartItemAddonUpdateManyWithWhereWithoutCartItemInput | CartItemAddonUpdateManyWithWhereWithoutCartItemInput[]
    deleteMany?: CartItemAddonScalarWhereInput | CartItemAddonScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartItemAddonUncheckedUpdateManyWithoutCartItemNestedInput = {
    create?: XOR<CartItemAddonCreateWithoutCartItemInput, CartItemAddonUncheckedCreateWithoutCartItemInput> | CartItemAddonCreateWithoutCartItemInput[] | CartItemAddonUncheckedCreateWithoutCartItemInput[]
    connectOrCreate?: CartItemAddonCreateOrConnectWithoutCartItemInput | CartItemAddonCreateOrConnectWithoutCartItemInput[]
    upsert?: CartItemAddonUpsertWithWhereUniqueWithoutCartItemInput | CartItemAddonUpsertWithWhereUniqueWithoutCartItemInput[]
    createMany?: CartItemAddonCreateManyCartItemInputEnvelope
    set?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    disconnect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    delete?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    connect?: CartItemAddonWhereUniqueInput | CartItemAddonWhereUniqueInput[]
    update?: CartItemAddonUpdateWithWhereUniqueWithoutCartItemInput | CartItemAddonUpdateWithWhereUniqueWithoutCartItemInput[]
    updateMany?: CartItemAddonUpdateManyWithWhereWithoutCartItemInput | CartItemAddonUpdateManyWithWhereWithoutCartItemInput[]
    deleteMany?: CartItemAddonScalarWhereInput | CartItemAddonScalarWhereInput[]
  }

  export type CartItemCreateNestedOneWithoutAddonsInput = {
    create?: XOR<CartItemCreateWithoutAddonsInput, CartItemUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: CartItemCreateOrConnectWithoutAddonsInput
    connect?: CartItemWhereUniqueInput
  }

  export type ProductAddonCreateNestedOneWithoutCartItemAddonInput = {
    create?: XOR<ProductAddonCreateWithoutCartItemAddonInput, ProductAddonUncheckedCreateWithoutCartItemAddonInput>
    connectOrCreate?: ProductAddonCreateOrConnectWithoutCartItemAddonInput
    connect?: ProductAddonWhereUniqueInput
  }

  export type CartItemUpdateOneRequiredWithoutAddonsNestedInput = {
    create?: XOR<CartItemCreateWithoutAddonsInput, CartItemUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: CartItemCreateOrConnectWithoutAddonsInput
    upsert?: CartItemUpsertWithoutAddonsInput
    connect?: CartItemWhereUniqueInput
    update?: XOR<XOR<CartItemUpdateToOneWithWhereWithoutAddonsInput, CartItemUpdateWithoutAddonsInput>, CartItemUncheckedUpdateWithoutAddonsInput>
  }

  export type ProductAddonUpdateOneRequiredWithoutCartItemAddonNestedInput = {
    create?: XOR<ProductAddonCreateWithoutCartItemAddonInput, ProductAddonUncheckedCreateWithoutCartItemAddonInput>
    connectOrCreate?: ProductAddonCreateOrConnectWithoutCartItemAddonInput
    upsert?: ProductAddonUpsertWithoutCartItemAddonInput
    connect?: ProductAddonWhereUniqueInput
    update?: XOR<XOR<ProductAddonUpdateToOneWithWhereWithoutCartItemAddonInput, ProductAddonUpdateWithoutCartItemAddonInput>, ProductAddonUncheckedUpdateWithoutCartItemAddonInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductSizeCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductSizeCreateWithoutOrderItemInput, ProductSizeUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductSizeCreateOrConnectWithoutOrderItemInput
    connect?: ProductSizeWhereUniqueInput
  }

  export type OrderItemAddonCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemAddonCreateWithoutOrderItemInput, OrderItemAddonUncheckedCreateWithoutOrderItemInput> | OrderItemAddonCreateWithoutOrderItemInput[] | OrderItemAddonUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutOrderItemInput | OrderItemAddonCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemAddonCreateManyOrderItemInputEnvelope
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
  }

  export type OrderItemAddonUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemAddonCreateWithoutOrderItemInput, OrderItemAddonUncheckedCreateWithoutOrderItemInput> | OrderItemAddonCreateWithoutOrderItemInput[] | OrderItemAddonUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutOrderItemInput | OrderItemAddonCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemAddonCreateManyOrderItemInputEnvelope
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductSizeUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<ProductSizeCreateWithoutOrderItemInput, ProductSizeUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductSizeCreateOrConnectWithoutOrderItemInput
    upsert?: ProductSizeUpsertWithoutOrderItemInput
    disconnect?: ProductSizeWhereInput | boolean
    delete?: ProductSizeWhereInput | boolean
    connect?: ProductSizeWhereUniqueInput
    update?: XOR<XOR<ProductSizeUpdateToOneWithWhereWithoutOrderItemInput, ProductSizeUpdateWithoutOrderItemInput>, ProductSizeUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderItemAddonUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemAddonCreateWithoutOrderItemInput, OrderItemAddonUncheckedCreateWithoutOrderItemInput> | OrderItemAddonCreateWithoutOrderItemInput[] | OrderItemAddonUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutOrderItemInput | OrderItemAddonCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemAddonUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemAddonUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemAddonCreateManyOrderItemInputEnvelope
    set?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    disconnect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    delete?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    update?: OrderItemAddonUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemAddonUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemAddonUpdateManyWithWhereWithoutOrderItemInput | OrderItemAddonUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemAddonScalarWhereInput | OrderItemAddonScalarWhereInput[]
  }

  export type OrderItemAddonUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemAddonCreateWithoutOrderItemInput, OrderItemAddonUncheckedCreateWithoutOrderItemInput> | OrderItemAddonCreateWithoutOrderItemInput[] | OrderItemAddonUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemAddonCreateOrConnectWithoutOrderItemInput | OrderItemAddonCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemAddonUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemAddonUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemAddonCreateManyOrderItemInputEnvelope
    set?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    disconnect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    delete?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    connect?: OrderItemAddonWhereUniqueInput | OrderItemAddonWhereUniqueInput[]
    update?: OrderItemAddonUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemAddonUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemAddonUpdateManyWithWhereWithoutOrderItemInput | OrderItemAddonUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemAddonScalarWhereInput | OrderItemAddonScalarWhereInput[]
  }

  export type OrderItemCreateNestedOneWithoutAddonsInput = {
    create?: XOR<OrderItemCreateWithoutAddonsInput, OrderItemUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutAddonsInput
    connect?: OrderItemWhereUniqueInput
  }

  export type ProductAddonCreateNestedOneWithoutOrderItemAddonInput = {
    create?: XOR<ProductAddonCreateWithoutOrderItemAddonInput, ProductAddonUncheckedCreateWithoutOrderItemAddonInput>
    connectOrCreate?: ProductAddonCreateOrConnectWithoutOrderItemAddonInput
    connect?: ProductAddonWhereUniqueInput
  }

  export type OrderItemUpdateOneRequiredWithoutAddonsNestedInput = {
    create?: XOR<OrderItemCreateWithoutAddonsInput, OrderItemUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutAddonsInput
    upsert?: OrderItemUpsertWithoutAddonsInput
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutAddonsInput, OrderItemUpdateWithoutAddonsInput>, OrderItemUncheckedUpdateWithoutAddonsInput>
  }

  export type ProductAddonUpdateOneRequiredWithoutOrderItemAddonNestedInput = {
    create?: XOR<ProductAddonCreateWithoutOrderItemAddonInput, ProductAddonUncheckedCreateWithoutOrderItemAddonInput>
    connectOrCreate?: ProductAddonCreateOrConnectWithoutOrderItemAddonInput
    upsert?: ProductAddonUpsertWithoutOrderItemAddonInput
    connect?: ProductAddonWhereUniqueInput
    update?: XOR<XOR<ProductAddonUpdateToOneWithWhereWithoutOrderItemAddonInput, ProductAddonUpdateWithoutOrderItemAddonInput>, ProductAddonUncheckedUpdateWithoutOrderItemAddonInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutOrderInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    connect?: AddressWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderStatusLogCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderStatusLogCreateWithoutOrderInput, OrderStatusLogUncheckedCreateWithoutOrderInput> | OrderStatusLogCreateWithoutOrderInput[] | OrderStatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusLogCreateOrConnectWithoutOrderInput | OrderStatusLogCreateOrConnectWithoutOrderInput[]
    createMany?: OrderStatusLogCreateManyOrderInputEnvelope
    connect?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderStatusLogUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderStatusLogCreateWithoutOrderInput, OrderStatusLogUncheckedCreateWithoutOrderInput> | OrderStatusLogCreateWithoutOrderInput[] | OrderStatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusLogCreateOrConnectWithoutOrderInput | OrderStatusLogCreateOrConnectWithoutOrderInput[]
    createMany?: OrderStatusLogCreateManyOrderInputEnvelope
    connect?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type AddressUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    upsert?: AddressUpsertWithoutOrderInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOrderInput, AddressUpdateWithoutOrderInput>, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderStatusLogUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderStatusLogCreateWithoutOrderInput, OrderStatusLogUncheckedCreateWithoutOrderInput> | OrderStatusLogCreateWithoutOrderInput[] | OrderStatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusLogCreateOrConnectWithoutOrderInput | OrderStatusLogCreateOrConnectWithoutOrderInput[]
    upsert?: OrderStatusLogUpsertWithWhereUniqueWithoutOrderInput | OrderStatusLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderStatusLogCreateManyOrderInputEnvelope
    set?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    disconnect?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    delete?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    connect?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    update?: OrderStatusLogUpdateWithWhereUniqueWithoutOrderInput | OrderStatusLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderStatusLogUpdateManyWithWhereWithoutOrderInput | OrderStatusLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderStatusLogScalarWhereInput | OrderStatusLogScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderStatusLogUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderStatusLogCreateWithoutOrderInput, OrderStatusLogUncheckedCreateWithoutOrderInput> | OrderStatusLogCreateWithoutOrderInput[] | OrderStatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusLogCreateOrConnectWithoutOrderInput | OrderStatusLogCreateOrConnectWithoutOrderInput[]
    upsert?: OrderStatusLogUpsertWithWhereUniqueWithoutOrderInput | OrderStatusLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderStatusLogCreateManyOrderInputEnvelope
    set?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    disconnect?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    delete?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    connect?: OrderStatusLogWhereUniqueInput | OrderStatusLogWhereUniqueInput[]
    update?: OrderStatusLogUpdateWithWhereUniqueWithoutOrderInput | OrderStatusLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderStatusLogUpdateManyWithWhereWithoutOrderInput | OrderStatusLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderStatusLogScalarWhereInput | OrderStatusLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type OrderCreateNestedOneWithoutOrderStatusLogInput = {
    create?: XOR<OrderCreateWithoutOrderStatusLogInput, OrderUncheckedCreateWithoutOrderStatusLogInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderStatusLogInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderStatusLogNestedInput = {
    create?: XOR<OrderCreateWithoutOrderStatusLogInput, OrderUncheckedCreateWithoutOrderStatusLogInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderStatusLogInput
    upsert?: OrderUpsertWithoutOrderStatusLogInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderStatusLogInput, OrderUpdateWithoutOrderStatusLogInput>, OrderUncheckedUpdateWithoutOrderStatusLogInput>
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserCreateNestedOneWithoutPasswordOtpInput = {
    create?: XOR<UserCreateWithoutPasswordOtpInput, UserUncheckedCreateWithoutPasswordOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordOtpInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPasswordOtpNestedInput = {
    create?: XOR<UserCreateWithoutPasswordOtpInput, UserUncheckedCreateWithoutPasswordOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordOtpInput
    upsert?: UserUpsertWithoutPasswordOtpInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordOtpInput, UserUpdateWithoutPasswordOtpInput>, UserUncheckedUpdateWithoutPasswordOtpInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFoodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodType | EnumFoodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodType[]
    notIn?: $Enums.FoodType[]
    not?: NestedEnumFoodTypeFilter<$PrismaModel> | $Enums.FoodType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFoodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodType | EnumFoodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodType[]
    notIn?: $Enums.FoodType[]
    not?: NestedEnumFoodTypeWithAggregatesFilter<$PrismaModel> | $Enums.FoodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodTypeFilter<$PrismaModel>
    _max?: NestedEnumFoodTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AddressCreateWithoutUserInput = {
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    Order?: OrderCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutUserInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutCartItemsInput
    size?: ProductSizeCreateNestedOneWithoutCartItemInput
    addons?: CartItemAddonCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
    sizeId?: number | null
    quantity: number
    addons?: CartItemAddonUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemCreateOrConnectWithoutUserInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemCreateManyUserInputEnvelope = {
    data: CartItemCreateManyUserInput | CartItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    merchantOrderId?: string | null
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    address: AddressCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    OrderStatusLog?: OrderStatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    merchantOrderId?: string | null
    addressId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    OrderStatusLog?: OrderStatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    body: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    body: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordOtpCreateWithoutUserInput = {
    codeHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    attempts?: number
    createdAt?: Date | string
  }

  export type PasswordOtpUncheckedCreateWithoutUserInput = {
    id?: number
    codeHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    attempts?: number
    createdAt?: Date | string
  }

  export type PasswordOtpCreateOrConnectWithoutUserInput = {
    where: PasswordOtpWhereUniqueInput
    create: XOR<PasswordOtpCreateWithoutUserInput, PasswordOtpUncheckedCreateWithoutUserInput>
  }

  export type PasswordOtpCreateManyUserInputEnvelope = {
    data: PasswordOtpCreateManyUserInput | PasswordOtpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    userId?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    building?: StringFilter<"Address"> | string
    floor?: StringFilter<"Address"> | string
    apartment?: StringFilter<"Address"> | string
    note?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
  }

  export type CartItemUpdateManyWithWhereWithoutUserInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutUserInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: IntFilter<"CartItem"> | number
    userId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    sizeId?: IntNullableFilter<"CartItem"> | number | null
    quantity?: IntFilter<"CartItem"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    merchantOrderId?: StringNullableFilter<"Order"> | string | null
    userId?: IntFilter<"Order"> | number
    addressId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: FloatFilter<"Order"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Order"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    paymobOrderId?: IntNullableFilter<"Order"> | number | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    productId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type PasswordOtpUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordOtpWhereUniqueInput
    update: XOR<PasswordOtpUpdateWithoutUserInput, PasswordOtpUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordOtpCreateWithoutUserInput, PasswordOtpUncheckedCreateWithoutUserInput>
  }

  export type PasswordOtpUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordOtpWhereUniqueInput
    data: XOR<PasswordOtpUpdateWithoutUserInput, PasswordOtpUncheckedUpdateWithoutUserInput>
  }

  export type PasswordOtpUpdateManyWithWhereWithoutUserInput = {
    where: PasswordOtpScalarWhereInput
    data: XOR<PasswordOtpUpdateManyMutationInput, PasswordOtpUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordOtpScalarWhereInput = {
    AND?: PasswordOtpScalarWhereInput | PasswordOtpScalarWhereInput[]
    OR?: PasswordOtpScalarWhereInput[]
    NOT?: PasswordOtpScalarWhereInput | PasswordOtpScalarWhereInput[]
    id?: IntFilter<"PasswordOtp"> | number
    userId?: IntFilter<"PasswordOtp"> | number
    codeHash?: StringFilter<"PasswordOtp"> | string
    expiresAt?: DateTimeFilter<"PasswordOtp"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordOtp"> | Date | string | null
    attempts?: IntFilter<"PasswordOtp"> | number
    createdAt?: DateTimeFilter<"PasswordOtp"> | Date | string
  }

  export type UserCreateWithoutAddressesInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type OrderCreateWithoutAddressInput = {
    merchantOrderId?: string | null
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    OrderStatusLog?: OrderStatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAddressInput = {
    id?: number
    merchantOrderId?: string | null
    userId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    OrderStatusLog?: OrderStatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
  }

  export type OrderCreateManyAddressInputEnvelope = {
    data: OrderCreateManyAddressInput | OrderCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutAddressInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    addons?: ProductAddonCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    addons?: ProductAddonUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isAvailable?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    foodType?: EnumFoodTypeFilter<"Product"> | $Enums.FoodType
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductSizeCreateWithoutProductInput = {
    name: string
    price: number
    CartItem?: CartItemCreateNestedManyWithoutSizeInput
    OrderItem?: OrderItemCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    price: number
    CartItem?: CartItemUncheckedCreateNestedManyWithoutSizeInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeCreateOrConnectWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeCreateManyProductInputEnvelope = {
    data: ProductSizeCreateManyProductInput | ProductSizeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductAddonCreateWithoutProductInput = {
    name: string
    price: number
    CartItemAddon?: CartItemAddonCreateNestedManyWithoutAddonInput
    OrderItemAddon?: OrderItemAddonCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    price: number
    CartItemAddon?: CartItemAddonUncheckedCreateNestedManyWithoutAddonInput
    OrderItemAddon?: OrderItemAddonUncheckedCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonCreateOrConnectWithoutProductInput = {
    where: ProductAddonWhereUniqueInput
    create: XOR<ProductAddonCreateWithoutProductInput, ProductAddonUncheckedCreateWithoutProductInput>
  }

  export type ProductAddonCreateManyProductInputEnvelope = {
    data: ProductAddonCreateManyProductInput | ProductAddonCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutProductInput = {
    quantity: number
    user: UserCreateNestedOneWithoutCartItemsInput
    size?: ProductSizeCreateNestedOneWithoutCartItemInput
    addons?: CartItemAddonCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    sizeId?: number | null
    quantity: number
    addons?: CartItemAddonUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    quantity: number
    unitPrice: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
    size?: ProductSizeCreateNestedOneWithoutOrderItemInput
    addons?: OrderItemAddonCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    sizeId?: number | null
    quantity: number
    unitPrice: number
    addons?: OrderItemAddonUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutProductInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: ReviewCreateManyProductInput | ReviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSizeUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    update: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    data: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
  }

  export type ProductSizeUpdateManyWithWhereWithoutProductInput = {
    where: ProductSizeScalarWhereInput
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSizeScalarWhereInput = {
    AND?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    OR?: ProductSizeScalarWhereInput[]
    NOT?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    id?: IntFilter<"ProductSize"> | number
    productId?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    price?: FloatFilter<"ProductSize"> | number
  }

  export type ProductAddonUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductAddonWhereUniqueInput
    update: XOR<ProductAddonUpdateWithoutProductInput, ProductAddonUncheckedUpdateWithoutProductInput>
    create: XOR<ProductAddonCreateWithoutProductInput, ProductAddonUncheckedCreateWithoutProductInput>
  }

  export type ProductAddonUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductAddonWhereUniqueInput
    data: XOR<ProductAddonUpdateWithoutProductInput, ProductAddonUncheckedUpdateWithoutProductInput>
  }

  export type ProductAddonUpdateManyWithWhereWithoutProductInput = {
    where: ProductAddonScalarWhereInput
    data: XOR<ProductAddonUpdateManyMutationInput, ProductAddonUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductAddonScalarWhereInput = {
    AND?: ProductAddonScalarWhereInput | ProductAddonScalarWhereInput[]
    OR?: ProductAddonScalarWhereInput[]
    NOT?: ProductAddonScalarWhereInput | ProductAddonScalarWhereInput[]
    id?: IntFilter<"ProductAddon"> | number
    productId?: IntFilter<"ProductAddon"> | number
    name?: StringFilter<"ProductAddon"> | string
    price?: FloatFilter<"ProductAddon"> | number
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    sizeId?: IntNullableFilter<"OrderItem"> | number | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutSizesInput = {
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    addons?: ProductAddonCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSizesInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt?: Date | string
    addons?: ProductAddonUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSizesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
  }

  export type CartItemCreateWithoutSizeInput = {
    quantity: number
    user: UserCreateNestedOneWithoutCartItemsInput
    product: ProductCreateNestedOneWithoutCartItemsInput
    addons?: CartItemAddonCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutSizeInput = {
    id?: number
    userId: number
    productId: number
    quantity: number
    addons?: CartItemAddonUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemCreateOrConnectWithoutSizeInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput>
  }

  export type CartItemCreateManySizeInputEnvelope = {
    data: CartItemCreateManySizeInput | CartItemCreateManySizeInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutSizeInput = {
    quantity: number
    unitPrice: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
    addons?: OrderItemAddonCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutSizeInput = {
    id?: number
    orderId: number
    productId: number
    quantity: number
    unitPrice: number
    addons?: OrderItemAddonUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutSizeInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput>
  }

  export type OrderItemCreateManySizeInputEnvelope = {
    data: OrderItemCreateManySizeInput | OrderItemCreateManySizeInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutSizesInput = {
    update: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSizesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductUpdateWithoutSizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    addons?: ProductAddonUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addons?: ProductAddonUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutSizeInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutSizeInput, CartItemUncheckedUpdateWithoutSizeInput>
    create: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutSizeInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutSizeInput, CartItemUncheckedUpdateWithoutSizeInput>
  }

  export type CartItemUpdateManyWithWhereWithoutSizeInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutSizeInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutSizeInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutSizeInput, OrderItemUncheckedUpdateWithoutSizeInput>
    create: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutSizeInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutSizeInput, OrderItemUncheckedUpdateWithoutSizeInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutSizeInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutSizeInput>
  }

  export type ProductCreateWithoutAddonsInput = {
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAddonsInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAddonsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAddonsInput, ProductUncheckedCreateWithoutAddonsInput>
  }

  export type CartItemAddonCreateWithoutAddonInput = {
    cartItem: CartItemCreateNestedOneWithoutAddonsInput
  }

  export type CartItemAddonUncheckedCreateWithoutAddonInput = {
    id?: number
    cartItemId: number
  }

  export type CartItemAddonCreateOrConnectWithoutAddonInput = {
    where: CartItemAddonWhereUniqueInput
    create: XOR<CartItemAddonCreateWithoutAddonInput, CartItemAddonUncheckedCreateWithoutAddonInput>
  }

  export type CartItemAddonCreateManyAddonInputEnvelope = {
    data: CartItemAddonCreateManyAddonInput | CartItemAddonCreateManyAddonInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemAddonCreateWithoutAddonInput = {
    orderItem: OrderItemCreateNestedOneWithoutAddonsInput
  }

  export type OrderItemAddonUncheckedCreateWithoutAddonInput = {
    id?: number
    orderItemId: number
  }

  export type OrderItemAddonCreateOrConnectWithoutAddonInput = {
    where: OrderItemAddonWhereUniqueInput
    create: XOR<OrderItemAddonCreateWithoutAddonInput, OrderItemAddonUncheckedCreateWithoutAddonInput>
  }

  export type OrderItemAddonCreateManyAddonInputEnvelope = {
    data: OrderItemAddonCreateManyAddonInput | OrderItemAddonCreateManyAddonInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutAddonsInput = {
    update: XOR<ProductUpdateWithoutAddonsInput, ProductUncheckedUpdateWithoutAddonsInput>
    create: XOR<ProductCreateWithoutAddonsInput, ProductUncheckedCreateWithoutAddonsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAddonsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAddonsInput, ProductUncheckedUpdateWithoutAddonsInput>
  }

  export type ProductUpdateWithoutAddonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAddonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartItemAddonUpsertWithWhereUniqueWithoutAddonInput = {
    where: CartItemAddonWhereUniqueInput
    update: XOR<CartItemAddonUpdateWithoutAddonInput, CartItemAddonUncheckedUpdateWithoutAddonInput>
    create: XOR<CartItemAddonCreateWithoutAddonInput, CartItemAddonUncheckedCreateWithoutAddonInput>
  }

  export type CartItemAddonUpdateWithWhereUniqueWithoutAddonInput = {
    where: CartItemAddonWhereUniqueInput
    data: XOR<CartItemAddonUpdateWithoutAddonInput, CartItemAddonUncheckedUpdateWithoutAddonInput>
  }

  export type CartItemAddonUpdateManyWithWhereWithoutAddonInput = {
    where: CartItemAddonScalarWhereInput
    data: XOR<CartItemAddonUpdateManyMutationInput, CartItemAddonUncheckedUpdateManyWithoutAddonInput>
  }

  export type CartItemAddonScalarWhereInput = {
    AND?: CartItemAddonScalarWhereInput | CartItemAddonScalarWhereInput[]
    OR?: CartItemAddonScalarWhereInput[]
    NOT?: CartItemAddonScalarWhereInput | CartItemAddonScalarWhereInput[]
    id?: IntFilter<"CartItemAddon"> | number
    cartItemId?: IntFilter<"CartItemAddon"> | number
    addonId?: IntFilter<"CartItemAddon"> | number
  }

  export type OrderItemAddonUpsertWithWhereUniqueWithoutAddonInput = {
    where: OrderItemAddonWhereUniqueInput
    update: XOR<OrderItemAddonUpdateWithoutAddonInput, OrderItemAddonUncheckedUpdateWithoutAddonInput>
    create: XOR<OrderItemAddonCreateWithoutAddonInput, OrderItemAddonUncheckedCreateWithoutAddonInput>
  }

  export type OrderItemAddonUpdateWithWhereUniqueWithoutAddonInput = {
    where: OrderItemAddonWhereUniqueInput
    data: XOR<OrderItemAddonUpdateWithoutAddonInput, OrderItemAddonUncheckedUpdateWithoutAddonInput>
  }

  export type OrderItemAddonUpdateManyWithWhereWithoutAddonInput = {
    where: OrderItemAddonScalarWhereInput
    data: XOR<OrderItemAddonUpdateManyMutationInput, OrderItemAddonUncheckedUpdateManyWithoutAddonInput>
  }

  export type OrderItemAddonScalarWhereInput = {
    AND?: OrderItemAddonScalarWhereInput | OrderItemAddonScalarWhereInput[]
    OR?: OrderItemAddonScalarWhereInput[]
    NOT?: OrderItemAddonScalarWhereInput | OrderItemAddonScalarWhereInput[]
    id?: IntFilter<"OrderItemAddon"> | number
    orderItemId?: IntFilter<"OrderItemAddon"> | number
    addonId?: IntFilter<"OrderItemAddon"> | number
  }

  export type UserCreateWithoutCartItemsInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartItemsInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
  }

  export type ProductCreateWithoutCartItemsInput = {
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    addons?: ProductAddonCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartItemsInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    addons?: ProductAddonUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
  }

  export type ProductSizeCreateWithoutCartItemInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutSizesInput
    OrderItem?: OrderItemCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeUncheckedCreateWithoutCartItemInput = {
    id?: number
    productId: number
    name: string
    price: number
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeCreateOrConnectWithoutCartItemInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutCartItemInput, ProductSizeUncheckedCreateWithoutCartItemInput>
  }

  export type CartItemAddonCreateWithoutCartItemInput = {
    addon: ProductAddonCreateNestedOneWithoutCartItemAddonInput
  }

  export type CartItemAddonUncheckedCreateWithoutCartItemInput = {
    id?: number
    addonId: number
  }

  export type CartItemAddonCreateOrConnectWithoutCartItemInput = {
    where: CartItemAddonWhereUniqueInput
    create: XOR<CartItemAddonCreateWithoutCartItemInput, CartItemAddonUncheckedCreateWithoutCartItemInput>
  }

  export type CartItemAddonCreateManyCartItemInputEnvelope = {
    data: CartItemAddonCreateManyCartItemInput | CartItemAddonCreateManyCartItemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartItemsInput = {
    update: XOR<UserUpdateWithoutCartItemsInput, UserUncheckedUpdateWithoutCartItemsInput>
    create: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartItemsInput, UserUncheckedUpdateWithoutCartItemsInput>
  }

  export type UserUpdateWithoutCartItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutCartItemsInput = {
    update: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateWithoutCartItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductSizeUpsertWithoutCartItemInput = {
    update: XOR<ProductSizeUpdateWithoutCartItemInput, ProductSizeUncheckedUpdateWithoutCartItemInput>
    create: XOR<ProductSizeCreateWithoutCartItemInput, ProductSizeUncheckedCreateWithoutCartItemInput>
    where?: ProductSizeWhereInput
  }

  export type ProductSizeUpdateToOneWithWhereWithoutCartItemInput = {
    where?: ProductSizeWhereInput
    data: XOR<ProductSizeUpdateWithoutCartItemInput, ProductSizeUncheckedUpdateWithoutCartItemInput>
  }

  export type ProductSizeUpdateWithoutCartItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
    OrderItem?: OrderItemUpdateManyWithoutSizeNestedInput
  }

  export type ProductSizeUncheckedUpdateWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    OrderItem?: OrderItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type CartItemAddonUpsertWithWhereUniqueWithoutCartItemInput = {
    where: CartItemAddonWhereUniqueInput
    update: XOR<CartItemAddonUpdateWithoutCartItemInput, CartItemAddonUncheckedUpdateWithoutCartItemInput>
    create: XOR<CartItemAddonCreateWithoutCartItemInput, CartItemAddonUncheckedCreateWithoutCartItemInput>
  }

  export type CartItemAddonUpdateWithWhereUniqueWithoutCartItemInput = {
    where: CartItemAddonWhereUniqueInput
    data: XOR<CartItemAddonUpdateWithoutCartItemInput, CartItemAddonUncheckedUpdateWithoutCartItemInput>
  }

  export type CartItemAddonUpdateManyWithWhereWithoutCartItemInput = {
    where: CartItemAddonScalarWhereInput
    data: XOR<CartItemAddonUpdateManyMutationInput, CartItemAddonUncheckedUpdateManyWithoutCartItemInput>
  }

  export type CartItemCreateWithoutAddonsInput = {
    quantity: number
    user: UserCreateNestedOneWithoutCartItemsInput
    product: ProductCreateNestedOneWithoutCartItemsInput
    size?: ProductSizeCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutAddonsInput = {
    id?: number
    userId: number
    productId: number
    sizeId?: number | null
    quantity: number
  }

  export type CartItemCreateOrConnectWithoutAddonsInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutAddonsInput, CartItemUncheckedCreateWithoutAddonsInput>
  }

  export type ProductAddonCreateWithoutCartItemAddonInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutAddonsInput
    OrderItemAddon?: OrderItemAddonCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonUncheckedCreateWithoutCartItemAddonInput = {
    id?: number
    productId: number
    name: string
    price: number
    OrderItemAddon?: OrderItemAddonUncheckedCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonCreateOrConnectWithoutCartItemAddonInput = {
    where: ProductAddonWhereUniqueInput
    create: XOR<ProductAddonCreateWithoutCartItemAddonInput, ProductAddonUncheckedCreateWithoutCartItemAddonInput>
  }

  export type CartItemUpsertWithoutAddonsInput = {
    update: XOR<CartItemUpdateWithoutAddonsInput, CartItemUncheckedUpdateWithoutAddonsInput>
    create: XOR<CartItemCreateWithoutAddonsInput, CartItemUncheckedCreateWithoutAddonsInput>
    where?: CartItemWhereInput
  }

  export type CartItemUpdateToOneWithWhereWithoutAddonsInput = {
    where?: CartItemWhereInput
    data: XOR<CartItemUpdateWithoutAddonsInput, CartItemUncheckedUpdateWithoutAddonsInput>
  }

  export type CartItemUpdateWithoutAddonsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
    size?: ProductSizeUpdateOneWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutAddonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductAddonUpsertWithoutCartItemAddonInput = {
    update: XOR<ProductAddonUpdateWithoutCartItemAddonInput, ProductAddonUncheckedUpdateWithoutCartItemAddonInput>
    create: XOR<ProductAddonCreateWithoutCartItemAddonInput, ProductAddonUncheckedCreateWithoutCartItemAddonInput>
    where?: ProductAddonWhereInput
  }

  export type ProductAddonUpdateToOneWithWhereWithoutCartItemAddonInput = {
    where?: ProductAddonWhereInput
    data: XOR<ProductAddonUpdateWithoutCartItemAddonInput, ProductAddonUncheckedUpdateWithoutCartItemAddonInput>
  }

  export type ProductAddonUpdateWithoutCartItemAddonInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutAddonsNestedInput
    OrderItemAddon?: OrderItemAddonUpdateManyWithoutAddonNestedInput
  }

  export type ProductAddonUncheckedUpdateWithoutCartItemAddonInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    OrderItemAddon?: OrderItemAddonUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type OrderCreateWithoutOrderItemsInput = {
    merchantOrderId?: string | null
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    address: AddressCreateNestedOneWithoutOrderInput
    OrderStatusLog?: OrderStatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    merchantOrderId?: string | null
    userId: number
    addressId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    OrderStatusLog?: OrderStatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    addons?: ProductAddonCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    addons?: ProductAddonUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductSizeCreateWithoutOrderItemInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutSizesInput
    CartItem?: CartItemCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeUncheckedCreateWithoutOrderItemInput = {
    id?: number
    productId: number
    name: string
    price: number
    CartItem?: CartItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type ProductSizeCreateOrConnectWithoutOrderItemInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutOrderItemInput, ProductSizeUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemAddonCreateWithoutOrderItemInput = {
    addon: ProductAddonCreateNestedOneWithoutOrderItemAddonInput
  }

  export type OrderItemAddonUncheckedCreateWithoutOrderItemInput = {
    id?: number
    addonId: number
  }

  export type OrderItemAddonCreateOrConnectWithoutOrderItemInput = {
    where: OrderItemAddonWhereUniqueInput
    create: XOR<OrderItemAddonCreateWithoutOrderItemInput, OrderItemAddonUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemAddonCreateManyOrderItemInputEnvelope = {
    data: OrderItemAddonCreateManyOrderItemInput | OrderItemAddonCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    OrderStatusLog?: OrderStatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderStatusLog?: OrderStatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductSizeUpsertWithoutOrderItemInput = {
    update: XOR<ProductSizeUpdateWithoutOrderItemInput, ProductSizeUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductSizeCreateWithoutOrderItemInput, ProductSizeUncheckedCreateWithoutOrderItemInput>
    where?: ProductSizeWhereInput
  }

  export type ProductSizeUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ProductSizeWhereInput
    data: XOR<ProductSizeUpdateWithoutOrderItemInput, ProductSizeUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductSizeUpdateWithoutOrderItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
    CartItem?: CartItemUpdateManyWithoutSizeNestedInput
  }

  export type ProductSizeUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItem?: CartItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type OrderItemAddonUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemAddonWhereUniqueInput
    update: XOR<OrderItemAddonUpdateWithoutOrderItemInput, OrderItemAddonUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderItemAddonCreateWithoutOrderItemInput, OrderItemAddonUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemAddonUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemAddonWhereUniqueInput
    data: XOR<OrderItemAddonUpdateWithoutOrderItemInput, OrderItemAddonUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderItemAddonUpdateManyWithWhereWithoutOrderItemInput = {
    where: OrderItemAddonScalarWhereInput
    data: XOR<OrderItemAddonUpdateManyMutationInput, OrderItemAddonUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type OrderItemCreateWithoutAddonsInput = {
    quantity: number
    unitPrice: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
    size?: ProductSizeCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutAddonsInput = {
    id?: number
    orderId: number
    productId: number
    sizeId?: number | null
    quantity: number
    unitPrice: number
  }

  export type OrderItemCreateOrConnectWithoutAddonsInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutAddonsInput, OrderItemUncheckedCreateWithoutAddonsInput>
  }

  export type ProductAddonCreateWithoutOrderItemAddonInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutAddonsInput
    CartItemAddon?: CartItemAddonCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonUncheckedCreateWithoutOrderItemAddonInput = {
    id?: number
    productId: number
    name: string
    price: number
    CartItemAddon?: CartItemAddonUncheckedCreateNestedManyWithoutAddonInput
  }

  export type ProductAddonCreateOrConnectWithoutOrderItemAddonInput = {
    where: ProductAddonWhereUniqueInput
    create: XOR<ProductAddonCreateWithoutOrderItemAddonInput, ProductAddonUncheckedCreateWithoutOrderItemAddonInput>
  }

  export type OrderItemUpsertWithoutAddonsInput = {
    update: XOR<OrderItemUpdateWithoutAddonsInput, OrderItemUncheckedUpdateWithoutAddonsInput>
    create: XOR<OrderItemCreateWithoutAddonsInput, OrderItemUncheckedCreateWithoutAddonsInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutAddonsInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutAddonsInput, OrderItemUncheckedUpdateWithoutAddonsInput>
  }

  export type OrderItemUpdateWithoutAddonsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    size?: ProductSizeUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutAddonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductAddonUpsertWithoutOrderItemAddonInput = {
    update: XOR<ProductAddonUpdateWithoutOrderItemAddonInput, ProductAddonUncheckedUpdateWithoutOrderItemAddonInput>
    create: XOR<ProductAddonCreateWithoutOrderItemAddonInput, ProductAddonUncheckedCreateWithoutOrderItemAddonInput>
    where?: ProductAddonWhereInput
  }

  export type ProductAddonUpdateToOneWithWhereWithoutOrderItemAddonInput = {
    where?: ProductAddonWhereInput
    data: XOR<ProductAddonUpdateWithoutOrderItemAddonInput, ProductAddonUncheckedUpdateWithoutOrderItemAddonInput>
  }

  export type ProductAddonUpdateWithoutOrderItemAddonInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutAddonsNestedInput
    CartItemAddon?: CartItemAddonUpdateManyWithoutAddonNestedInput
  }

  export type ProductAddonUncheckedUpdateWithoutOrderItemAddonInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItemAddon?: CartItemAddonUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type AddressCreateWithoutOrderInput = {
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateWithoutOrderInput = {
    id?: number
    userId: number
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutOrderInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    quantity: number
    unitPrice: number
    product: ProductCreateNestedOneWithoutOrderItemsInput
    size?: ProductSizeCreateNestedOneWithoutOrderItemInput
    addons?: OrderItemAddonCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    productId: number
    sizeId?: number | null
    quantity: number
    unitPrice: number
    addons?: OrderItemAddonUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderStatusLogCreateWithoutOrderInput = {
    status: $Enums.OrderStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusLogUncheckedCreateWithoutOrderInput = {
    id?: number
    status: $Enums.OrderStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusLogCreateOrConnectWithoutOrderInput = {
    where: OrderStatusLogWhereUniqueInput
    create: XOR<OrderStatusLogCreateWithoutOrderInput, OrderStatusLogUncheckedCreateWithoutOrderInput>
  }

  export type OrderStatusLogCreateManyOrderInputEnvelope = {
    data: OrderStatusLogCreateManyOrderInput | OrderStatusLogCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressUpsertWithoutOrderInput = {
    update: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOrderInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type AddressUpdateWithoutOrderInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderStatusLogUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderStatusLogWhereUniqueInput
    update: XOR<OrderStatusLogUpdateWithoutOrderInput, OrderStatusLogUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderStatusLogCreateWithoutOrderInput, OrderStatusLogUncheckedCreateWithoutOrderInput>
  }

  export type OrderStatusLogUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderStatusLogWhereUniqueInput
    data: XOR<OrderStatusLogUpdateWithoutOrderInput, OrderStatusLogUncheckedUpdateWithoutOrderInput>
  }

  export type OrderStatusLogUpdateManyWithWhereWithoutOrderInput = {
    where: OrderStatusLogScalarWhereInput
    data: XOR<OrderStatusLogUpdateManyMutationInput, OrderStatusLogUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderStatusLogScalarWhereInput = {
    AND?: OrderStatusLogScalarWhereInput | OrderStatusLogScalarWhereInput[]
    OR?: OrderStatusLogScalarWhereInput[]
    NOT?: OrderStatusLogScalarWhereInput | OrderStatusLogScalarWhereInput[]
    id?: IntFilter<"OrderStatusLog"> | number
    orderId?: IntFilter<"OrderStatusLog"> | number
    status?: EnumOrderStatusFilter<"OrderStatusLog"> | $Enums.OrderStatus
    note?: StringNullableFilter<"OrderStatusLog"> | string | null
    createdAt?: DateTimeFilter<"OrderStatusLog"> | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    addons?: ProductAddonCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    categoryId: number
    foodType: $Enums.FoodType
    createdAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    addons?: ProductAddonUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderCreateWithoutOrderStatusLogInput = {
    merchantOrderId?: string | null
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    address: AddressCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderStatusLogInput = {
    id?: number
    merchantOrderId?: string | null
    userId: number
    addressId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderStatusLogInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderStatusLogInput, OrderUncheckedCreateWithoutOrderStatusLogInput>
  }

  export type OrderUpsertWithoutOrderStatusLogInput = {
    update: XOR<OrderUpdateWithoutOrderStatusLogInput, OrderUncheckedUpdateWithoutOrderStatusLogInput>
    create: XOR<OrderCreateWithoutOrderStatusLogInput, OrderUncheckedCreateWithoutOrderStatusLogInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderStatusLogInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderStatusLogInput, OrderUncheckedUpdateWithoutOrderStatusLogInput>
  }

  export type OrderUpdateWithoutOrderStatusLogInput = {
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderStatusLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserCreateWithoutNotificationInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    PasswordOtp?: PasswordOtpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    PasswordOtp?: PasswordOtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordOtpInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordOtpInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordOtpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordOtpInput, UserUncheckedCreateWithoutPasswordOtpInput>
  }

  export type UserUpsertWithoutPasswordOtpInput = {
    update: XOR<UserUpdateWithoutPasswordOtpInput, UserUncheckedUpdateWithoutPasswordOtpInput>
    create: XOR<UserCreateWithoutPasswordOtpInput, UserUncheckedCreateWithoutPasswordOtpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordOtpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordOtpInput, UserUncheckedUpdateWithoutPasswordOtpInput>
  }

  export type UserUpdateWithoutPasswordOtpInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordOtpInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressCreateManyUserInput = {
    id?: number
    city: string
    street: string
    building: string
    floor: string
    apartment: string
    note?: string | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type CartItemCreateManyUserInput = {
    id?: number
    productId: number
    sizeId?: number | null
    quantity: number
  }

  export type OrderCreateManyUserInput = {
    id?: number
    merchantOrderId?: string | null
    addressId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    productId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    body: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PasswordOtpCreateManyUserInput = {
    id?: number
    codeHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    attempts?: number
    createdAt?: Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
    size?: ProductSizeUpdateOneWithoutCartItemNestedInput
    addons?: CartItemAddonUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addons?: CartItemAddonUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutUserInput = {
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    OrderStatusLog?: OrderStatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    OrderStatusLog?: OrderStatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordOtpUpdateWithoutUserInput = {
    codeHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordOtpUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordOtpUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyAddressInput = {
    id?: number
    merchantOrderId?: string | null
    userId: number
    status?: $Enums.OrderStatus
    totalPrice: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    paymobOrderId?: number | null
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutAddressInput = {
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    OrderStatusLog?: OrderStatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    OrderStatusLog?: OrderStatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymobOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    price: number
    imageUrl?: string | null
    isAvailable?: boolean
    foodType: $Enums.FoodType
    createdAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    addons?: ProductAddonUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    foodType?: EnumFoodTypeFieldUpdateOperationsInput | $Enums.FoodType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSizeCreateManyProductInput = {
    id?: number
    name: string
    price: number
  }

  export type ProductAddonCreateManyProductInput = {
    id?: number
    name: string
    price: number
  }

  export type CartItemCreateManyProductInput = {
    id?: number
    userId: number
    sizeId?: number | null
    quantity: number
  }

  export type OrderItemCreateManyProductInput = {
    id?: number
    orderId: number
    sizeId?: number | null
    quantity: number
    unitPrice: number
  }

  export type ReviewCreateManyProductInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ProductSizeUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItem?: CartItemUpdateManyWithoutSizeNestedInput
    OrderItem?: OrderItemUpdateManyWithoutSizeNestedInput
  }

  export type ProductSizeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItem?: CartItemUncheckedUpdateManyWithoutSizeNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductAddonUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItemAddon?: CartItemAddonUpdateManyWithoutAddonNestedInput
    OrderItemAddon?: OrderItemAddonUpdateManyWithoutAddonNestedInput
  }

  export type ProductAddonUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    CartItemAddon?: CartItemAddonUncheckedUpdateManyWithoutAddonNestedInput
    OrderItemAddon?: OrderItemAddonUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type ProductAddonUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    size?: ProductSizeUpdateOneWithoutCartItemNestedInput
    addons?: CartItemAddonUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addons?: CartItemAddonUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    size?: ProductSizeUpdateOneWithoutOrderItemNestedInput
    addons?: OrderItemAddonUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    addons?: OrderItemAddonUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutProductInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManySizeInput = {
    id?: number
    userId: number
    productId: number
    quantity: number
  }

  export type OrderItemCreateManySizeInput = {
    id?: number
    orderId: number
    productId: number
    quantity: number
    unitPrice: number
  }

  export type CartItemUpdateWithoutSizeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
    addons?: CartItemAddonUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    addons?: CartItemAddonUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateManyWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateWithoutSizeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    addons?: OrderItemAddonUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    addons?: OrderItemAddonUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemAddonCreateManyAddonInput = {
    id?: number
    cartItemId: number
  }

  export type OrderItemAddonCreateManyAddonInput = {
    id?: number
    orderItemId: number
  }

  export type CartItemAddonUpdateWithoutAddonInput = {
    cartItem?: CartItemUpdateOneRequiredWithoutAddonsNestedInput
  }

  export type CartItemAddonUncheckedUpdateWithoutAddonInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartItemId?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemAddonUncheckedUpdateManyWithoutAddonInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartItemId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemAddonUpdateWithoutAddonInput = {
    orderItem?: OrderItemUpdateOneRequiredWithoutAddonsNestedInput
  }

  export type OrderItemAddonUncheckedUpdateWithoutAddonInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderItemId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemAddonUncheckedUpdateManyWithoutAddonInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderItemId?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemAddonCreateManyCartItemInput = {
    id?: number
    addonId: number
  }

  export type CartItemAddonUpdateWithoutCartItemInput = {
    addon?: ProductAddonUpdateOneRequiredWithoutCartItemAddonNestedInput
  }

  export type CartItemAddonUncheckedUpdateWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemAddonUncheckedUpdateManyWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemAddonCreateManyOrderItemInput = {
    id?: number
    addonId: number
  }

  export type OrderItemAddonUpdateWithoutOrderItemInput = {
    addon?: ProductAddonUpdateOneRequiredWithoutOrderItemAddonNestedInput
  }

  export type OrderItemAddonUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemAddonUncheckedUpdateManyWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    addonId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    productId: number
    sizeId?: number | null
    quantity: number
    unitPrice: number
  }

  export type OrderStatusLogCreateManyOrderInput = {
    id?: number
    status: $Enums.OrderStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    size?: ProductSizeUpdateOneWithoutOrderItemNestedInput
    addons?: OrderItemAddonUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    addons?: OrderItemAddonUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderStatusLogUpdateWithoutOrderInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusLogUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusLogUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
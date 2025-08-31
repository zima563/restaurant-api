// auth/token.util.ts
import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_ACCESS_SECRET || 'dev-secret'; // بدّل في الإنتاج

type Scope = 'pw:otp' | 'pw:reset';

export function signStageToken(payload: {
  sub: number;
  scope: Scope;
  otpId?: number;
  jti?: string;
  ttlSec: number;
}) {
  const { ttlSec, ...rest } = payload;
  return jwt.sign(rest, SECRET, { expiresIn: ttlSec });
}

export function verifyStageToken<T = any>(
  token: string,
  expectedScope: Scope,
): T & { scope: Scope } {
  const decoded = jwt.verify(token, SECRET) as T & { scope: Scope };
  if (decoded.scope !== expectedScope) throw new Error('Invalid token scope');
  return decoded;
}

import prisma from '@/utils/db';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export async function DELETE(req: Request, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { ok: false, message: 'You are unauthorized' },
      { status: 401 },
    );

  const apply = await prisma.application
    .findFirst({
      where: {
        id: parseInt(params.id),
      },
    })
    .finally(() => {
      prisma.$disconnect();
    });

  if (!apply) {
    return NextResponse.json(
      { ok: false, message: 'Apply not found' },
      { status: 404 },
    );
  }

  if (apply.userId.toString() !== session.user.id.toString()) {
    return NextResponse.json(
      { ok: false, message: 'User is not owner of application' },
      { status: 403 },
    );
  }

  const res = await prisma.application
    .delete({
      where: {
        id: parseInt(params.id),
      },
    })
    .catch((e) => {
      return console.log(e);
    })
    .finally(() => {
      prisma.$disconnect();
    });

  return NextResponse.json(
    { ok: true, message: 'Apply successfully deleted' },
    { status: 200 },
  );
}

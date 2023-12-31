import { getServerSession } from 'next-auth';
import prisma from '@/utils/db';
import { authOptions } from '@/utils/authOptions';
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';

export async function POST(req: Request, res: NextApiResponse) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: 'Access Restricted' }, { status: 403 });
  if (
    session.user.role.toString() !== 'Employer' &&
    session.user.role.toString() !== 'Admin'
  ) {
    return NextResponse.json({ message: 'Access Restricted' }, { status: 403 });
  }

  const {
    title,
    company,
    companyLogo,
    workSchedule,
    minSalary,
    maxSalary,
    location,
    description,
  } = await req.json();

  if (
    !title ||
    !company ||
    !workSchedule ||
    !minSalary ||
    !maxSalary ||
    !location ||
    !description
  ) {
    return NextResponse.json(
      { message: 'Missing required parameter' },
      { status: 400 },
    );
  }

  const newVacancy = await prisma.vacancy
    .create({
      data: {
        title,
        company,
        companyLogo: companyLogo ? companyLogo : '',
        workSchedule,
        minSalary,
        maxSalary,
        location,
        description,
        authorId: parseInt(session.user.id),
      },
    })
    .finally(() => {
      prisma.$disconnect();
    });

  return NextResponse.json({ newVacancy }, { status: 200 });
}

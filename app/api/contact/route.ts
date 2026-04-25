import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, phone, date, persons, message } = body;

        // এটি মেইল পাঠানোর ইঞ্জিন
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'manasbarman06@gmail.com', // আপনার জিমেইল
                pass: 'keva prmo leuy igut',    // আপনার ১৬ অক্ষরের অ্যাপ পাসওয়ার্ডটি এখানে বসান
            },
        });

        const mailOptions = {
            from: 'Sundarban Tour <manasbarman06@gmail.com>',
            to: 'manasbarman06@gmail.com', // যেখানে মেইলটি যাবে
            subject: `New Inquiry from ${fullName}`,
            text: `
                Name: ${fullName}
                Phone: ${phone}
                Date: ${date}
                Persons: ${persons}
                Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Success" }, { status: 200 });

    } catch (error) {
        console.error("Email Error:", error); // এটি আপনার টার্মিনালে এরর দেখাবে
        return NextResponse.json({ message: "Failed" }, { status: 500 });
    }
}
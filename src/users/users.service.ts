import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Repository } from 'typeorm';
import { bcrypt } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  getUser() {}
  async join(email: string, nickname: string, password: string) {
    if (!email) {
      throw new Error('이메일이 없어요');
    }

    if (!nickname) {
      throw new Error('닉네임이 없어요');
    }
    if (!password) {
      throw new Error('비밀번호가 없어요');
    }
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new Error('이미 존재하는 사용자입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}

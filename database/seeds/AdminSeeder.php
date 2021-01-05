<?php

use Illuminate\Database\Seeder;
use App\User;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Ashanur',
            'email' => 'ashanour009@gmail.com',
            'password' => bcrypt('12345678'),
            'role' => 'administrator'
        ]);
    }
}

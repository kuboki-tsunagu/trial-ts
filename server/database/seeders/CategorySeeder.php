<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('primary_categories')->insert([
            [
                'name' => 'メイク',
            ],
            [
                'name' => 'ダンス',
            ],
            [
                'name' => '歌',
            ],
            [
                'name' => '体型管理',
            ],
        ]);

        DB::table('secondary_categories')->insert([
            [
                'name' => 'スキンケア',
                'primary_category_id' => 1,
            ],
            [
                'name' => 'ベースメイク',
                'primary_category_id' => 1,
            ],
            [
                'name' => 'メイクアップ',
                'primary_category_id' => 1,
            ],
            [
                'name' => 'ヘアケア',
                'primary_category_id' => 1,
            ],
            [
                'name' => 'メンズメイク',
                'primary_category_id' => 1,
            ],
            [
                'name' => 'KPOP',
                'primary_category_id' => 2,
            ],
            [
                'name' => 'JPOP',
                'primary_category_id' => 2,
            ],
            [
                'name' => 'ストリート',
                'primary_category_id' => 2,
            ],
            [
                'name' => 'ヒップホップ',
                'primary_category_id' => 2,
            ],
            [
                'name' => 'その他',
                'primary_category_id' => 2,
            ],
            [
                'name' => '一般ボーカル',
                'primary_category_id' => 3,
            ],
            [
                'name' => 'ボイストレーニング',
                'primary_category_id' => 3,
            ],
            [
                'name' => 'カラオケ上達',
                'primary_category_id' => 3,
            ],
            [
                'name' => 'その他',
                'primary_category_id' => 3,
            ],
            [
                'name' => '食事管理',
                'primary_category_id' => 4,
            ],
            [
                'name' => 'トレーニング',
                'primary_category_id' => 4,
            ],
            [
                'name' => 'ピラティス',
                'primary_category_id' => 4,
            ],
            [
                'name' => 'その他',
                'primary_category_id' => 4,
            ],
        ]);
    }
}

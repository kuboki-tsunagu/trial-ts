<?php

namespace App\Http\Controllers;

use App\Models\PrimaryCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategories()
    {
        $categories = PrimaryCategory::with('secondary')->get();

        return response()->json($categories);
    }
}

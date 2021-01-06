<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' => 'required|min:3|max:30',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
        ],[
            'name.required' => 'Please give Your Name',
            'email.required' => 'Please give Email Address',
            'email.unique' => 'Please give unique Email Address or Login',
            'password.required' => 'Please give Password',
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ]);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email; 
        $user->password = bcrypt($request->password);
        
        if($user->save()){
            return response()->json([
               'message' => 'User Created Successfully!', 
               'status_code' => 201
            ],201);
        }else{
            return response()->json([
                'message' => 'Some Error occurred, please try again!', 
                'status_code' => 500
             ],500);
        }
    }
    public function login(Request $request)
    {
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'email' => 'required|email',
            'password' => 'required',
            // 'remember_me' => 'boolean'
        ],[
            'email.required' => 'Please give Email Address',
            'password.required' => 'Please give Password',
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => 'Error !',
                'errors' => $validator->getMessageBag(),
            ]);
        }
        if(!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'message' => 'Unauthorized',
                'status_code' => 401
            ], 401);
        }
        $user = $request->user();

        if($user->role == 'administrator'){
            $tokenData = $user->createToken('Personal Access Tokens', ['do_anything']);
        }else{
            $tokenData = $user->createToken('Personal Access Tokens', ['can_create']);
        }
        $token = $tokenData->token;
        if($request->remember_me){
            $token->expires_at = Carbon::now()->addWeeks(2);
        }
        if($token->save()){
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' =>'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        }else{
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function logout(Request $request)
    {
        $request->user()->tokens()->revoke();
        return response()->json([
            'message' => 'logout Successfully!',
            'status_code' => 200            
        ], 200);
    }
}
